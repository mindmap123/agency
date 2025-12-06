import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, email, company, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Champs requis manquants" });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return res.status(500).json({ success: false, message: "Configuration email manquante" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f7;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f7; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
          <tr>
            <td style="background: linear-gradient(135deg, #1079E5 0%, #0d5bb5 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">🚀 Nouvelle demande de contact</h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">Via le site Next Level</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 4px; font-size: 12px; color: #64748b; text-transform: uppercase;">Nom</p>
                    <p style="margin: 0 0 16px; font-size: 16px; color: #1e293b; font-weight: 600;">${name}</p>
                    <p style="margin: 0 0 4px; font-size: 12px; color: #64748b; text-transform: uppercase;">Email</p>
                    <p style="margin: 0 0 16px; font-size: 16px;"><a href="mailto:${email}" style="color: #1079E5; text-decoration: none;">${email}</a></p>
                    ${company ? `<p style="margin: 0 0 4px; font-size: 12px; color: #64748b; text-transform: uppercase;">Entreprise</p><p style="margin: 0 0 16px; font-size: 16px; color: #1e293b;">${company}</p>` : ""}
                    ${phone ? `<p style="margin: 0 0 4px; font-size: 12px; color: #64748b; text-transform: uppercase;">Téléphone</p><p style="margin: 0 0 16px; font-size: 16px; color: #1e293b;">${phone}</p>` : ""}
                    ${service ? `<p style="margin: 0 0 4px; font-size: 12px; color: #64748b; text-transform: uppercase;">Service</p><p style="margin: 0; font-size: 16px;"><span style="background-color: #1079E5; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px;">${service}</span></p>` : ""}
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 12px; font-size: 12px; color: #64748b; text-transform: uppercase;">Message</p>
              <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; border-left: 4px solid #1079E5;">
                <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
              <table width="100%" style="margin-top: 24px;"><tr><td align="center">
                <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #1079E5 0%, #0d5bb5 100%); color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600;">Répondre à ${name}</a>
              </td></tr></table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f8fafc; padding: 24px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 13px; color: #64748b;">© ${new Date().getFullYear()} Next Level Agency • Bordeaux</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    await resend.emails.send({
      from: "Next Level <onboarding@resend.dev>",
      to: ["nextlevelagency33@gmail.com"],
      replyTo: email,
      subject: `🚀 Nouvelle demande de ${name}${company ? ` - ${company}` : ""}`,
      html: emailHtml,
    });

    return res.status(200).json({ success: true, message: "Email envoyé avec succès" });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ success: false, message: "Erreur serveur" });
  }
}
