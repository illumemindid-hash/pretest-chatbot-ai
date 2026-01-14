export async function chatOllama({ message, history = [] }) {
  const baseUrl = process.env.OLLAMA_BASE_URL || "http://localhost:11434";
  const model = process.env.OLLAMA_MODEL || "llama3";

  const prompt = [
    "Kamu adalah chatbot yang ramah. Jawab singkat dan jelas.",
    ...history.map(h => `${h.role.toUpperCase()}: ${h.content}`),
    `USER: ${message}`,
    "ASSISTANT:"
  ].join("\n");

  const r = await fetch(`${baseUrl}/api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model, prompt, stream: false })
  });

  if (!r.ok) throw new Error("Gagal konek ke Ollama. Pastikan Ollama berjalan.");
  const data = await r.json();
  return data.response || "(no response)";
}
