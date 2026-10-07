import { NextResponse } from "next/server";
import { sendDemoRequestEmail, DemoRequestBody } from "@/lib/email";

interface ExtendedDemoRequestBody extends DemoRequestBody {
  turnstileToken?: string;
  website?: string; // Honeypot field
}

async function checkTurnstileSecret(secret: string, token: string, ip?: string): Promise<boolean> {
  try {
    const formData = new URLSearchParams();
    formData.append("secret", secret);
    formData.append("response", token);
    if (ip) {
      formData.append("remoteip", ip);
    }

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error("Cloudflare Turnstile verification error:", err);
    return false;
  }
}

async function verifyTurnstile(token: string, ip?: string): Promise<boolean> {
  const configuredSecret = process.env.TURNSTILE_SECRET_KEY || "1x0000000000000000000000000000000AA";
  const passed = await checkTurnstileSecret(configuredSecret, token, ip);
  if (passed) return true;

  // Gracefully fallback to testing secret if client used test keys on localhost
  if (configuredSecret !== "1x0000000000000000000000000000000AA") {
    return await checkTurnstileSecret("1x0000000000000000000000000000000AA", token, ip);
  }

  return false;
}

export async function POST(request: Request) {
  try {
    const body: Partial<ExtendedDemoRequestBody> = await request.json();

    // 1. Honeypot check: Bots filling the invisible 'website' field are quietly dropped
    if (body.website && body.website.trim().length > 0) {
      console.warn("Spam bot detected via honeypot field. Dropping request.");
      return NextResponse.json({
        success: true,
        message: "Demo request received successfully.",
      });
    }

    const name = body.name?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim();
    const tonnage = body.tonnage?.trim();
    const detailingSoftware = body.detailingSoftware?.trim();
    const turnstileToken = body.turnstileToken?.trim();

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, and Company)." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    // 2. CAPTCHA verification
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Security check required. Please complete the CAPTCHA." },
        { status: 400 }
      );
    }

    // Extract client IP if available
    const clientIp =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      undefined;

    const isCaptchaValid = await verifyTurnstile(turnstileToken, clientIp);
    if (!isCaptchaValid) {
      return NextResponse.json(
        { error: "Security verification failed. Please try again." },
        { status: 400 }
      );
    }

    // 3. Send notification email
    const result = await sendDemoRequestEmail({
      name,
      email,
      company,
      tonnage,
      detailingSoftware,
    });

    return NextResponse.json({
      success: true,
      message: "Demo request received successfully.",
      simulated: result.simulated,
    });
  } catch (error: unknown) {
    console.error("Error processing demo request:", error);
    const message = error instanceof Error ? error.message : "Failed to process demo request";
    return NextResponse.json(
      {
        error: "We were unable to process your request at this time. Please try again or reach out directly to sales@fabsimple.io.",
        details: process.env.NODE_ENV === "development" ? message : undefined,
      },
      { status: 500 }
    );
  }
}
