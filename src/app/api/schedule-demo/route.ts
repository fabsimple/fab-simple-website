import { NextResponse } from "next/server";
import { sendDemoRequestEmail, DemoRequestBody } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body: Partial<DemoRequestBody> = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim();
    const tonnage = body.tonnage?.trim();
    const detailingSoftware = body.detailingSoftware?.trim();

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
      { error: "We were unable to process your request at this time. Please try again or reach out directly to sales@fabsimple.io.", details: process.env.NODE_ENV === "development" ? message : undefined },
      { status: 500 }
    );
  }
}
