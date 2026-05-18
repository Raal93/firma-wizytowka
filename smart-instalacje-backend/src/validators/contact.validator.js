function countLinks(text = "") {
  const matches = text.match(/https?:\/\/|www\.|\.pl|\.com|\.net|\.org/gi);
  return matches ? matches.length : 0;
}

function isTooFast(startedAt) {
  if (!startedAt) return false;

  const startedTime = Number(startedAt);

  if (!Number.isFinite(startedTime)) return true;

  const now = Date.now();
  const elapsedMs = now - startedTime;

  return elapsedMs < 3000;
}

export function validateContactPayload(payload) {
  const errors = [];

  const name = String(payload.name || "").trim();
  const contact = String(payload.contact || "").trim();
  const message = String(payload.message || "").trim();

  const website = String(payload.website || "").trim();
  const startedAt = payload.startedAt;

  if (website.length > 0) {
    errors.push("Wiadomość została odrzucona.");
  }

  if (isTooFast(startedAt)) {
    errors.push("Formularz został wysłany zbyt szybko.");
  }

  if (name.length < 2 || name.length > 60) {
    errors.push("Imię powinno mieć od 2 do 60 znaków.");
  }

  if (contact.length < 5 || contact.length > 120) {
    errors.push("Podaj poprawny telefon lub e-mail.");
  }

  if (message.length < 20 || message.length > 1500) {
    errors.push("Wiadomość powinna mieć od 20 do 1500 znaków.");
  }

  if (countLinks(message) > 2) {
    errors.push("Wiadomość zawiera zbyt dużo linków.");
  }

  return {
    isValid: errors.length === 0,
    errors,
    data: {
      name,
      contact,
      message,
    },
  };
}
