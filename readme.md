---

# 🤖 Pretest – Chatbot AI (Node.js + Express)

Aplikasi **chatbot sederhana berbasis web** yang terintegrasi dengan **AI (OpenAI / ChatGPT)**.
Project ini dibuat untuk memenuhi **Soal Nomor 2 Pretest**, dengan fokus pada integrasi AI dan UI sederhana.

---

## 🚀 Fitur

* Chatbot berbasis web (UI sederhana)
* Integrasi AI menggunakan **OpenAI (ChatGPT)**
* Menggunakan **Responses API**
* Mendukung **conversation history** dalam satu sesi
* Struktur kode modular (mudah dikembangkan)
* Desain UI bebas dan ringan

---

## 🛠️ Teknologi

* **Node.js**
* **Express.js**
* **OpenAI Node SDK**
* **HTML, CSS, JavaScript (Vanilla)**
* **dotenv** untuk environment variable

---

## 📁 Struktur Folder

```
pretest-chatbot-ai/
├─ src/
│  ├─ app.js
│  └─ ai/
│     ├─ openai.js
│     └─ ollama.js (opsional)
├─ public/
│  ├─ index.html
│  ├─ styles.css
│  └─ chat.js
├─ .env.example
├─ .gitignore
├─ package.json
└─ README.md
```

---

## ⚙️ Instalasi & Menjalankan Aplikasi

### 1️⃣ Prasyarat

* Node.js (LTS)
* Akun OpenAI + API Key

---

### 2️⃣ Clone Repository

```bash
git clone https://github.com/illumemindid-hash/pretest-chatbot-ai.git
cd pretest-chatbot-ai
```

---

### 3️⃣ Install Dependency

```bash
npm install
```

---

### 4️⃣ Setup Environment

Salin file `.env.example`:

```bash
cp .env.example .env
```

Isi `.env`:

```env
PORT=3001
AI_PROVIDER=openai

OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4.1-mini
```

> ⚠️ File `.env` **tidak di-upload ke GitHub**.

---

### 5️⃣ Jalankan Aplikasi

```bash
npm start
```

Buka di browser:

```
http://localhost:3001
```

---

## 🧪 Cara Penggunaan

1. Buka aplikasi di browser
2. Ketik pesan di kolom input
3. Tekan **Kirim**
4. Chatbot akan membalas menggunakan AI
5. Riwayat chat disimpan sementara selama sesi browser aktif

---

## 🔐 Keamanan

* API Key disimpan di **environment variable**
* File `.env` di-ignore oleh Git (`.gitignore`)
* Tidak ada API key yang disimpan di repository

---

## 📌 Catatan Teknis

* Aplikasi menggunakan **OpenAI Responses API**
* Chat history dikirim dari client ke server untuk menjaga konteks
* Struktur sederhana agar mudah dipahami dan dinilai

---

## 📄 Kesimpulan

Aplikasi chatbot ini memenuhi seluruh kebutuhan **Soal Nomor 2 Pretest**:

* Chatbot sederhana ✔
* Terintegrasi dengan AI (ChatGPT) ✔
* UI bebas ✔
* Node.js + Express ✔

---

## 👤 Author

**Nama:** *Tsar Ahmad Alkhowarizmi*
**Tanggal:** *14 January 2026*

---

