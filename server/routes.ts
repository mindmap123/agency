import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { Resend } from "resend";

const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);

      const resend = new Resend(process.env.RESEND_API_KEY);

      if (!process.env.RESEND_API_KEY) {
        console.warn("⚠️ WARNING: RESEND_API_KEY not set in environment.");
        return res.status(500).json({ success: false, message: "Configuration email manquante" });
      }

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
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
                🚀 Nouvelle demande de contact
              </h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
                Via le site Next Level
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom: 16px; border-bottom: 1px solid #e2e8f0;">
                          <p style="margin: 0 0 4px; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Nom</p>
                          <p style="margin: 0; font-size: 16px; color: #1e293b; font-weight: 600;">${data.name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                          <p style="margin: 0 0 4px; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                          <p style="margin: 0; font-size: 16px; color: #1079E5; font-weight: 500;">
                            <a href="mailto:${data.email}" style="color: #1079E5; text-decoration: none;">${data.email}</a>
                          </p>
                        </td>
                      </tr>
                      ${data.company ? `
                      <tr>
                        <td style="padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                          <p style="margin: 0 0 4px; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Entreprise</p>
                          <p style="margin: 0; font-size: 16px; color: #1e293b;">${data.company}</p>
                        </td>
                      </tr>
                      ` : ''}
                      ${data.phone ? `
                      <tr>
                        <td style="padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                          <p style="margin: 0 0 4px; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Téléphone</p>
                          <p style="margin: 0; font-size: 16px; color: #1e293b;">
                            <a href="tel:${data.phone}" style="color: #1e293b; text-decoration: none;">${data.phone}</a>
                          </p>
                        </td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding-top: 16px;">
                          <p style="margin: 0 0 4px; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Service demandé</p>
                          <p style="margin: 0; font-size: 16px; color: #1e293b;">
                            <span style="background-color: #1079E5; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px;">${data.service}</span>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <div style="margin-bottom: 32px;">
                <p style="margin: 0 0 12px; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; border-left: 4px solid #1079E5;">
                  <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                </div>
              </div>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${data.email}" style="display: inline-block; background: linear-gradient(135deg, #1079E5 0%, #0d5bb5 100%); color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                      Répondre à ${data.name}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f8fafc; padding: 24px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 13px; color: #64748b;">
                © ${new Date().getFullYear()} Next Level Agency • Bordeaux, France
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `;

      await resend.emails.send({
        from: 'Next Level <onboarding@resend.dev>',
        to: ['nextlevelagency33@gmail.com'],
        replyTo: data.email,
        subject: `🚀 Nouvelle demande de ${data.name}${data.company ? ` - ${data.company}` : ''} - ${data.service}`,
        html: emailHtml,
      });

      res.json({ success: true, message: "Email envoyé avec succès" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Données invalides", errors: error.errors });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ success: false, message: "Erreur serveur" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
