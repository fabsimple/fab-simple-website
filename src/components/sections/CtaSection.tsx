"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import Turnstile from "@/components/ui/Turnstile";

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const resetTurnstileRef = useRef<(() => void) | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    tonnage: "",
    detailingSoftware: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#demo") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      setErrorMessage("Please complete the security check.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/schedule-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          turnstileToken,
          website: honeypot,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to submit your request at this time. Please try again.");
      }

      setSubmitted(true);
      setTurnstileToken("");

      // Clean up hash from URL immediately upon submission
      if (typeof window !== "undefined" && window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setErrorMessage(message);
      // Reset Turnstile on error so user can re-verify
      resetTurnstileRef.current?.();
      setTurnstileToken("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="demo" className="section-padding bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-700 text-xs font-medium text-zinc-400 uppercase tracking-widest mb-6">
              Live Walkthrough
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
              See FabSimple running
              <span className="text-zinc-400"> on your shop floor.</span>
            </h2>
            <p className="mt-5 text-zinc-400 text-lg leading-relaxed">
              Book a tailored 45-minute demo with one of our fabrication specialists. We&apos;ll inspect your current workflow, test a sample Tekla BOM, and show you exactly how FabSimple eliminates shop bottlenecks.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Live walkthrough tailored to your monthly tonnage and shop layout",
                "See your own data — upload a sample Tekla or SDS/2 BOM to test our revision parser",
                "Review the offline-first mobile Worker PWA on a shop tablet or phone",
                "Learn how to export tamper-proof AISC 303 & AWS D1.1 audit binders in under 60 seconds",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                  <ArrowRight size={16} className="text-zinc-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-3">
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <Mail size={16} className="text-zinc-600" />
                <span>sales@fabsimple.io</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <Phone size={16} className="text-zinc-600" />
                <span>+1 (800) 322-7475</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <MapPin size={16} className="text-zinc-600" />
                <span>Available for steel fabricators across the US &amp; Canada</span>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8"
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-zinc-700" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Your walkthrough is requested!</h3>
                <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                  A FabSimple structural fabrication specialist will reach out within one business day to coordinate the live session.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setTurnstileToken("");
                    resetTurnstileRef.current?.();
                    if (typeof window !== "undefined" && window.location.hash) {
                      window.history.replaceState(null, "", window.location.pathname + window.location.search);
                    }
                    setForm({
                      name: "",
                      email: "",
                      company: "",
                      tonnage: "",
                      detailingSoftware: "",
                    });
                  }}
                  className="mt-6 text-xs text-zinc-500 hover:text-zinc-900 underline font-medium transition"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-zinc-900 mb-6">Schedule Your Shop Demo</h3>
                <form id="demo-form" onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div
                      id="demo-form-error"
                      role="alert"
                      className="p-3 bg-zinc-100 border border-zinc-300 rounded-md text-xs text-zinc-800 leading-relaxed"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1.5" htmlFor="demo-name">
                        Full Name *
                      </label>
                      <input
                        id="demo-name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm border border-zinc-300 rounded-md bg-zinc-50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition disabled:opacity-50"
                        placeholder="Marcus Webb"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1.5" htmlFor="demo-email">
                        Work Email *
                      </label>
                      <input
                        id="demo-email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm border border-zinc-300 rounded-md bg-zinc-50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition disabled:opacity-50"
                        placeholder="marcus@meridiansteel.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1.5" htmlFor="demo-company">
                      Fabrication Company Name *
                    </label>
                    <input
                      id="demo-company"
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm border border-zinc-300 rounded-md bg-zinc-50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition disabled:opacity-50"
                      placeholder="Meridian Steel Fabricators"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1.5" htmlFor="demo-tonnage">
                        Monthly Tonnage
                      </label>
                      <select
                        id="demo-tonnage"
                        disabled={isSubmitting}
                        value={form.tonnage}
                        onChange={(e) => setForm({ ...form, tonnage: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm border border-zinc-300 rounded-md bg-zinc-50 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition disabled:opacity-50"
                      >
                        <option value="">Select volume</option>
                        <option value="under200">Under 200 tons/mo</option>
                        <option value="200-600">200 – 600 tons/mo</option>
                        <option value="600-1500">600 – 1,500 tons/mo</option>
                        <option value="1500+">1,500+ tons/mo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1.5" htmlFor="demo-software">
                        Detailing Software
                      </label>
                      <select
                        id="demo-software"
                        disabled={isSubmitting}
                        value={form.detailingSoftware}
                        onChange={(e) => setForm({ ...form, detailingSoftware: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm border border-zinc-300 rounded-md bg-zinc-50 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition disabled:opacity-50"
                      >
                        <option value="">Select software</option>
                        <option value="tekla">Tekla Structures</option>
                        <option value="sds2">SDS/2</option>
                        <option value="autocad">AutoCAD / Advance Steel</option>
                        <option value="other">KISS / FabTrol / Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Honeypot field for bot trap */}
                  <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                    <label htmlFor="hp-website">Website</label>
                    <input
                      id="hp-website"
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Cloudflare Turnstile CAPTCHA */}
                  <div className="pt-2 flex justify-center">
                    <Turnstile
                      onSuccess={(token) => {
                        setTurnstileToken(token);
                        setErrorMessage(null);
                      }}
                      onError={() => {
                        setTurnstileToken("");
                      }}
                      onExpire={() => {
                        setTurnstileToken("");
                      }}
                      onResetReady={(resetFn) => {
                        resetTurnstileRef.current = resetFn;
                      }}
                      theme="light"
                    />
                  </div>

                  <button
                    type="submit"
                    id="demo-submit"
                    disabled={isSubmitting || !turnstileToken}
                    className="w-full py-3.5 bg-zinc-900 text-white text-sm font-semibold rounded-md hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin text-zinc-300" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Request My Walkthrough</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-zinc-400">
                    No generic pitch decks. We evaluate your actual shop workflow and demonstrate real functionality.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
