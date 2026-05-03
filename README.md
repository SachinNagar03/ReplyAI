<div align="center">

# ✉️ Smart Email Reply Generator

### *AI-powered email replies, crafted in seconds.*

Paste an email, pick a tone, and get a polished, professional response — instantly.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-reply--genai.vercel.app-6366F1?style=for-the-badge&logoColor=white)](https://reply-genai.vercel.app/)

<br/>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

</div>

---

## 📖 About

**Smart Email Reply Generator** is a full-stack AI web app that helps users compose thoughtful email responses without the writer's block. Pick a tone — *Formal*, *Friendly*, or *Casual* — and the app generates a context-aware reply you can copy, save, and revisit anytime.

Built end-to-end with a React frontend, an Express API, and MongoDB Atlas for persistence.

---

## ✨ Features

- 🤖 **AI-Powered Replies** — Generate professional responses in seconds
- 🎨 **Tone Control** — Switch between Formal, Friendly, and Casual
- 📋 **One-Click Copy** — Copy generated replies to clipboard
- 💾 **Save & Revisit** — Persist replies to MongoDB
- 📚 **Reply History** — Browse all your previously saved replies
- 📱 **Fully Responsive** — Looks great on every device

---

## 🛠️ Tech Stack

| Layer        | Technologies                                      |
| ------------ | ------------------------------------------------- |
| **Frontend** | React.js · JavaScript · CSS · Fetch API           |
| **Backend**  | Node.js · Express.js                              |
| **Database** | MongoDB Atlas                                     |
| **AI**       | OpenAI API                                        |
| **Hosting**  | Vercel *(frontend)* · Render *(backend)*          |

---

## ⚙️ How It Works

```text
   ┌──────────┐      ┌────────────┐      ┌─────────────┐      ┌──────────┐
   │   User   │ ───▶ │  Frontend  │ ───▶ │   Backend   │ ───▶ │  OpenAI  │
   │  (Email) │      │  (React)   │      │  (Express)  │      │   API    │
   └──────────┘      └────────────┘      └──────┬──────┘      └──────────┘
                                                │
                                                ▼
                                         ┌─────────────┐
                                         │   MongoDB   │
                                         │    Atlas    │
                                         └─────────────┘
```

1. User pastes an email or message
2. User selects a tone *(Formal / Friendly / Casual)*
3. Frontend sends a request to the backend API
4. Backend calls the AI model and returns the generated reply
5. User can copy or save the reply
6. Saved replies live in MongoDB and can be fetched later

---

## 🔌 API Reference

<details>
<summary><b><code>POST</code> /api/generate-reply</b> — Generate an AI-powered reply</summary>

**Request body**
```json
{
  "email": "Can you send the report by tomorrow?",
  "tone": "formal"
}
```

**Response**
```json
{
  "reply": "Thank you for your email. I will ensure the report reaches you by tomorrow."
}
```
</details>

<details>
<summary><b><code>POST</code> /api/save-reply</b> — Save a generated reply to the database</summary>

**Request body**
```json
{
  "originalEmail": "Can you send the report by tomorrow?",
  "generatedReply": "Thank you for your email...",
  "tone": "formal"
}
```
</details>

<details>
<summary><b><code>GET</code> /api/replies</b> — Fetch all saved replies</summary>

Returns an array of previously saved replies, ordered by creation date.
</details>

---

## 📁 Project Structure

```text
smart-email-reply-gen/
├── frontend/
│   └── my-app/          # React app (Vercel)
├── backend/             # Express API (Render)
└── README.md
```

---

## 🚀 Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repository-name.git
cd smart-email-reply-gen
```

### 2. Backend
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
```

Start the server:
```bash
npm start
```

### 3. Frontend
```bash
cd frontend/my-app
npm install
```

Create a `.env` file inside `frontend/my-app/`:
```env
VITE_API_URL=http://localhost:5000
```

Run the dev server:
```bash
npm run dev
```

---

## 🗺️ Roadmap

- [ ] 🔐 Google OAuth authentication
- [ ] 🔍 Reply history filtering & search
- [ ] 🗑️ Delete saved replies
- [ ] ✏️ Edit saved replies
- [ ] 🎯 Better prompt customization
- [ ] 🎨 Rich email formatting

---

## 👤 Author

<div align="center">

**Sachin Nagar**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-username)

<br/>

⭐ *If you found this project useful, consider giving it a star!*

</div>
