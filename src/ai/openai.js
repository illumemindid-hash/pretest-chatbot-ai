import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function chatOpenAI({ message, history = [] }) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY belum diisi di .env");
  }

  // history format: [{role: "user"|"assistant", content:"..."}]
  const input = [
    {
      role: "system",
      content: "Kamu adalah chatbot yang ramah, jawab singkat dan jelas dalam Bahasa Indonesia."
    },
    ...history,
    { role: "user", content: message }
  ];

  const resp = await client.responses.create({
    model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
    input
  });

  return resp.output_text || "(no response)";
}
