import dotenv from "dotenv";
dotenv.config(); // <-- WAJIB DI ATAS sebelum import openai.js

import express from "express";
import path from "path";

import { chatOpenAI } from "./ai/openai.js";
import { chatOllama } from "./ai/ollama.js";

const app = express();
const PORT = Number(process.env.PORT || 3001);

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "message is required" });
    }

    const provider = (process.env.AI_PROVIDER || "openai").toLowerCase();

    let reply = "";
    if (provider === "openai") {
      reply = await chatOpenAI({ message, history: history || [] });
    } else if (provider === "ollama") {
      reply = await chatOllama({ message, history: history || [] });
    } else {
      return res.status(400).json({ error: "Unknown AI_PROVIDER" });
    }

    res.json({ reply });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`Chatbot running at http://localhost:${PORT}`);
});
