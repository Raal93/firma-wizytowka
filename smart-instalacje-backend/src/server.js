import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

import contactRoute from "./routes/contact.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;
const allowedOrigins = (process.env.FRONTEND_URLS || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(helmet());

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS: niedozwolone źródło."));
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json({ limit: "20kb" }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Zbyt wiele prób wysłania formularza. Spróbuj ponownie za kilka minut.",
  },
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend działa.",
  });
});

app.use("/api/contact", contactLimiter, contactRoute);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Nie znaleziono endpointu.",
  });
});

app.listen(PORT, () => {
  console.log(`Backend działa na http://localhost:${PORT}`);
});
