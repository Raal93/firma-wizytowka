import express from "express";
import { validateContactPayload } from "../validators/contact.validator.js";
import { sendContactEmail } from "../services/mail.service.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const validation = validateContactPayload(req.body);

    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: "Formularz zawiera błędy.",
        errors: validation.errors,
      });
    }

    if (process.env.MAIL_ENABLED !== "true") {
      console.log("Tryb testowy formularza. Dane po walidacji:", validation.data);

      return res.status(200).json({
        success: true,
        message: "Formularz przeszedł walidację. Wysyłka maila jest obecnie wyłączona.",
      });
    }

    await sendContactEmail(validation.data);

    return res.status(200).json({
      success: true,
      message: "Wiadomość została wysłana.",
    });
  } catch (error) {
    console.error("Błąd wysyłki formularza:", error);

    return res.status(500).json({
      success: false,
      message: "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
    });
  }
});

export default router;
