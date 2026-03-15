"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  nome: string;
  email: string;
  telefono?: string;
  messaggio: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { nome, email, telefono, messaggio } = data;

  if (!nome || !email || !messaggio) {
    return { success: false, error: "Nome, email e messaggio sono obbligatori." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Indirizzo email non valido." };
  }

  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "Growth Gaming <onboarding@resend.dev>",
      to: process.env.EMAIL_TEAM || "f.cugurra@gmail.com",
      replyTo: process.env.EMAIL_REPLY_TO || email,
      subject: `[Growth Gaming] Nuovo messaggio da ${nome}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">Nuovo messaggio dal sito</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top; width: 100px;">Nome</td>
              <td style="padding: 8px 0;">${nome}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${telefono ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Telefono</td>
              <td style="padding: 8px 0;">${telefono}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Messaggio</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${messaggio}</td>
            </tr>
          </table>
          <hr style="margin-top: 24px; border: none; border-top: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">Inviato dal form contatti di growthgaming.it</p>
        </div>
      `,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Errore nell'invio. Riprova più tardi." };
  }
}
