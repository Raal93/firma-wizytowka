import { Resend } from "resend";
import { escapeHtml } from "../utils/escapeHtml.js";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || apiKey === "tu_wkleisz_klucz_pozniej") {
    throw new Error("Brak poprawnego RESEND_API_KEY w pliku .env.");
  }

  return new Resend(apiKey);
}

export async function sendContactEmail({ name, contact, message }) {
  const mailFrom = process.env.MAIL_FROM;
  const mailTo = process.env.MAIL_TO;

  if (!mailFrom || !mailTo) {
    throw new Error("Brak MAIL_FROM lub MAIL_TO w zmiennych środowiskowych.");
  }

  const resend = getResendClient();

  const safeName = escapeHtml(name);
  const safeContact = escapeHtml(contact);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  const subject = `Nowe zapytanie ze strony — ${name}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2>Nowe zapytanie ze strony Smart Instalacje</h2>

      <p><strong>Imię:</strong> ${safeName}</p>
      <p><strong>Kontakt:</strong> ${safeContact}</p>

      <hr />

      <p><strong>Wiadomość:</strong></p>
      <p>${safeMessage}</p>
    </div>
  `;

  const text = `
Nowe zapytanie ze strony Smart Instalacje

Imię: ${name}
Kontakt: ${contact}

Wiadomość:
${message}
  `;

  return resend.emails.send({
    from: mailFrom,
    to: mailTo,
    subject,
    html,
    text,
  });
}
