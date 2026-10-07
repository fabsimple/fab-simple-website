/**
 * Email configuration for FabSimple demo requests.
 * 
 * ============================================================================
 * TO CHANGE THE RECIPIENT EMAIL ADDRESS:
 * 1. Change the email address below (e.g. "gourav.naik@gmail.com")
 *    OR
 * 2. Set DEMO_NOTIFICATION_EMAIL in your .env.local file / hosting environment.
 * ============================================================================
 */

export const EMAIL_CONFIG = {
  // Recipient email where all demo request notifications are sent
  get recipientEmail(): string {
    return process.env.DEMO_NOTIFICATION_EMAIL || "gourav.naik@gmail.com";
  },

  // Sender information (Brevo verified sender email)
  get fromEmail(): string {
    return process.env.SMTP_FROM || '"FabSimple Demo Requests" <contact@gouravnaik.dev>';
  },

  // Brevo SMTP credentials
  get smtp() {
    return {
      host: process.env.SMTP_HOST || "smtp-relay.brevo.com",
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_SECURE === "true", // false for STARTTLS (port 587)
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || "",
    };
  },
};
