import nodemailer from "nodemailer";
import { EMAIL_CONFIG } from "./email-config";

export interface DemoRequestBody {
  name: string;
  email: string;
  company: string;
  tonnage?: string;
  detailingSoftware?: string;
}

const TONNAGE_LABELS: Record<string, string> = {
  under200: "Under 200 tons/mo",
  "200-600": "200 – 600 tons/mo",
  "600-1500": "600 – 1,500 tons/mo",
  "1500+": "1,500+ tons/mo",
};

const SOFTWARE_LABELS: Record<string, string> = {
  tekla: "Tekla Structures",
  sds2: "SDS/2",
  autocad: "AutoCAD / Advance Steel",
  other: "KISS / FabTrol / Other",
};

export async function sendDemoRequestEmail(data: DemoRequestBody) {
  const recipient = EMAIL_CONFIG.recipientEmail;
  const readableTonnage = data.tonnage ? (TONNAGE_LABELS[data.tonnage] || data.tonnage) : "Not specified";
  const readableSoftware = data.detailingSoftware ? (SOFTWARE_LABELS[data.detailingSoftware] || data.detailingSoftware) : "Not specified";
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "UTC",
    dateStyle: "full",
    timeStyle: "long",
  }) + " (UTC)";

  const subject = `[FabSimple Demo Request] ${data.company} - ${data.name}`;

  const textBody = `
New Shop Demo Request Received for FabSimple!
==============================================

Contact Details:
- Name: ${data.name}
- Email: ${data.email}
- Company: ${data.company}
- Monthly Tonnage: ${readableTonnage}
- Detailing Software: ${readableSoftware}
- Submission Time: ${timestamp}

You can reply directly to this email to contact ${data.name} at ${data.email}.
`.trim();

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Shop Demo Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #18181b;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e4e4e7; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    
    <!-- Header -->
    <div style="background-color: #18181b; padding: 28px 32px; color: #ffffff;">
      <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #a1a1aa; margin-bottom: 6px;">
        FabSimple Website Lead
      </div>
      <h1 style="margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em; color: #ffffff;">
        New Shop Demo Request
      </h1>
      <p style="margin: 6px 0 0 0; font-size: 13px; color: #a1a1aa;">
        A fabrication lead has requested a live walkthrough.
      </p>
    </div>

    <!-- Body Content -->
    <div style="padding: 32px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tbody>
          <tr style="border-bottom: 1px solid #f4f4f5;">
            <td style="padding: 12px 0; color: #71717a; width: 160px; font-weight: 500;">Prospect Name</td>
            <td style="padding: 12px 0; color: #18181b; font-weight: 600;">${data.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f4f4f5;">
            <td style="padding: 12px 0; color: #71717a; font-weight: 500;">Work Email</td>
            <td style="padding: 12px 0;">
              <a href="mailto:${data.email}" style="color: #18181b; font-weight: 600; text-decoration: underline;">
                ${data.email}
              </a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f4f4f5;">
            <td style="padding: 12px 0; color: #71717a; font-weight: 500;">Company Name</td>
            <td style="padding: 12px 0; color: #18181b; font-weight: 600;">${data.company}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f4f4f5;">
            <td style="padding: 12px 0; color: #71717a; font-weight: 500;">Monthly Tonnage</td>
            <td style="padding: 12px 0; color: #18181b; font-weight: 600;">${readableTonnage}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f4f4f5;">
            <td style="padding: 12px 0; color: #71717a; font-weight: 500;">Detailing Software</td>
            <td style="padding: 12px 0; color: #18181b; font-weight: 600;">${readableSoftware}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #71717a; font-weight: 500;">Submitted At</td>
            <td style="padding: 12px 0; color: #71717a; font-size: 13px;">${timestamp}</td>
          </tr>
        </tbody>
      </table>

      <!-- Action Button -->
      <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e4e4e7; text-align: center;">
        <a href="mailto:${data.email}?subject=FabSimple%20Demo%20Walkthrough%20for%20${encodeURIComponent(data.company)}"
           style="display: inline-block; background-color: #18181b; color: #ffffff; padding: 12px 28px; border-radius: 6px; font-size: 14px; font-weight: 600; text-decoration: none;">
          Reply Directly to ${data.name}
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #fafafa; border-top: 1px solid #e4e4e7; padding: 16px 32px; text-align: center;">
      <p style="margin: 0; font-size: 12px; color: #71717a;">
        Notification delivered to <strong>${recipient}</strong> via FabSimple Demo Scheduler.
      </p>
    </div>
  </div>
</body>
</html>
`.trim();

  // If Brevo SMTP credentials are not configured yet, simulate and log to console
  if (!EMAIL_CONFIG.smtp.user || !EMAIL_CONFIG.smtp.pass) {
    console.warn("\n⚠️ [Brevo SMTP Notice] SMTP_USER or SMTP_PASS environment variables are not set.");
    console.info(`📧 [Simulated Email] Demo request logged for notification to: ${recipient}`);
    console.info(`Payload:`, {
      name: data.name,
      email: data.email,
      company: data.company,
      tonnage: readableTonnage,
      detailingSoftware: readableSoftware,
    });
    console.info("💡 To send real emails via Brevo, please add SMTP_USER and SMTP_PASS to your .env.local file.\n");

    return {
      success: true,
      simulated: true,
      recipient,
      message: "Demo request received (Simulated in development mode until Brevo SMTP credentials are configured)",
    };
  }

  // Create Nodemailer transport with Brevo SMTP
  const transporter = nodemailer.createTransport({
    host: EMAIL_CONFIG.smtp.host,
    port: EMAIL_CONFIG.smtp.port,
    secure: EMAIL_CONFIG.smtp.secure,
    auth: {
      user: EMAIL_CONFIG.smtp.user,
      pass: EMAIL_CONFIG.smtp.pass,
    },
  });

  const fromAddress = EMAIL_CONFIG.fromEmail.includes("<")
    ? EMAIL_CONFIG.fromEmail
    : `"FabSimple Demo Requests" <${EMAIL_CONFIG.fromEmail}>`;

  const mailOptions = {
    from: fromAddress,
    to: recipient,
    replyTo: `${data.name} <${data.email}>`,
    subject,
    text: textBody,
    html: htmlBody,
  };

  const info = await transporter.sendMail(mailOptions);
  return {
    success: true,
    simulated: false,
    messageId: info.messageId,
    recipient,
  };
}
