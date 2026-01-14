const chatEl = document.getElementById("chat");
const form = document.getElementById("form");
const msgEl = document.getElementById("msg");

let history = []; // {role, content}

function addBubble(role, text) {
  const div = document.createElement("div");
  div.className = `bubble ${role}`;
  div.textContent = text;
  chatEl.appendChild(div);
  chatEl.scrollTop = chatEl.scrollHeight;
}

addBubble("assistant", "Halo! Tanyakan apa saja 🙂");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const message = msgEl.value.trim();
  if (!message) return;

  addBubble("user", message);
  history.push({ role: "user", content: message });
  msgEl.value = "";

  // loading bubble
  const loadingText = "Mengetik...";
  addBubble("assistant", loadingText);
  const loadingEl = chatEl.lastChild;

  try {
    const r = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history })
    });

    const data = await r.json();
    if (!r.ok) throw new Error(data.error || "Error");

    // replace loading
    loadingEl.textContent = data.reply;
    history.push({ role: "assistant", content: data.reply });
  } catch (err) {
    loadingEl.textContent = "Error: " + err.message;
  }
});
