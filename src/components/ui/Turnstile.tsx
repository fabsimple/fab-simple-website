"use client";

import { useEffect, useRef, useState, useCallback } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        params: {
          sitekey: string;
          callback?: (token: string) => void;
          "error-callback"?: (error?: string) => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "flexible" | "compact";
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

interface TurnstileProps {
  siteKey?: string;
  onSuccess: (token: string) => void;
  onError?: (error?: string) => void;
  onExpire?: () => void;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "flexible" | "compact";
  className?: string;
  onResetReady?: (resetFn: () => void) => void;
}

export default function Turnstile({
  siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA",
  onSuccess,
  onError,
  onExpire,
  theme = "light",
  size = "normal",
  className = "",
  onResetReady,
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [activeSiteKey, setActiveSiteKey] = useState(siteKey);
  const [isLocalhostFallback, setIsLocalhostFallback] = useState(false);

  // Store latest callbacks in refs so they NEVER trigger re-renders or widget re-mounts
  const onSuccessRef = useRef(onSuccess);
  onSuccessRef.current = onSuccess;

  const onErrorRef = useRef(onError);
  onErrorRef.current = onError;

  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  // Sync activeSiteKey only if siteKey prop itself changes
  useEffect(() => {
    setActiveSiteKey(siteKey);
  }, [siteKey]);

  // Load Cloudflare Turnstile script once
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.turnstile) {
      setScriptLoaded(true);
      return;
    }

    const scriptId = "cf-turnstile-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => setScriptLoaded(true);
      document.head.appendChild(script);
    } else {
      if (window.turnstile) {
        setScriptLoaded(true);
      } else {
        script.addEventListener("load", () => setScriptLoaded(true));
      }
    }
  }, []);

  const handleReset = useCallback(() => {
    if (widgetIdRef.current && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current);
      } catch {
        // no-op
      }
    }
  }, []);

  // Expose reset function once ready
  useEffect(() => {
    if (onResetReady) {
      onResetReady(handleReset);
    }
  }, [onResetReady, handleReset]);

  // Render widget ONLY when script or activeSiteKey changes - NOT on keystroke/re-render
  useEffect(() => {
    if (!scriptLoaded || !containerRef.current || !window.turnstile) return;

    // Clean up previous widget instance if siteKey changes
    if (widgetIdRef.current) {
      try {
        window.turnstile.remove(widgetIdRef.current);
      } catch {
        // no-op
      }
      widgetIdRef.current = null;
    }

    try {
      const widgetId = window.turnstile.render(containerRef.current, {
        sitekey: activeSiteKey,
        theme,
        size,
        callback: (token: string) => {
          onSuccessRef.current?.(token);
        },
        "error-callback": (err?: string) => {
          console.warn("[Cloudflare Turnstile] Widget error:", err);

          const isLocal =
            typeof window !== "undefined" &&
            (window.location.hostname === "localhost" ||
              window.location.hostname === "127.0.0.1");

          // Fallback if localhost is not whitelisted in Cloudflare for this key
          if (isLocal && activeSiteKey !== "1x00000000000000000000AA") {
            console.info(
              "💡 [Cloudflare Turnstile] Localhost fallback to test sitekey. Add 'localhost' in Cloudflare dashboard to test live key locally."
            );
            setIsLocalhostFallback(true);
            setActiveSiteKey("1x00000000000000000000AA");
            return;
          }

          onErrorRef.current?.(err);
        },
        "expired-callback": () => {
          onExpireRef.current?.();
        },
      });

      widgetIdRef.current = widgetId;
    } catch (err) {
      console.error("Turnstile render error:", err);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // no-op
        }
        widgetIdRef.current = null;
      }
    };
  }, [scriptLoaded, activeSiteKey, theme, size]);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Fixed dimensions container prevents any layout shifts or jumping */}
      <div
        ref={containerRef}
        id="turnstile-widget"
        className={`w-[300px] min-h-[65px] h-[65px] flex items-center justify-center ${className}`}
      />
      {isLocalhostFallback && (
        <p className="text-[11px] text-zinc-500 text-center mt-1 leading-snug">
          (Local test mode. Add <code className="text-zinc-700">localhost</code> in Cloudflare dashboard to test your live key.)
        </p>
      )}
    </div>
  );
}
