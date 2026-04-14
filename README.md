# Vishesh – Interactive AI Portfolio

A full-stack web application built with **React, Node.js, Express, and MongoDB**, featuring **AI integration** for intelligent chat and interactions.  
This project demonstrates modern web development practices, clean architecture, and secure AI usage.

---

## 🔗 Live Demo

- **Frontend:** 
- **Backend API:** 

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios
- Framer Motion
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- CORS & dotenv

### AI Integration
- GROQ AI (securely handled on backend)

### Deployment
- Frontend: **Vercel / Netlify**
- Backend: **Render / Railway**

---

## ✨ Features

- 🤖 AI-powered chat system
- 🔐 Secure API handling (AI keys hidden in backend)
- 💬 Real-time chat UI
- 📁 Clean frontend & backend separation
- 🌐 RESTful API architecture
- 📱 Fully responsive UI
- ⚡ Optimized performance

---

## 📂 Project Structure

```

project-root/
│
├── ai-portfolio-backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── utils/
│   ├── package.json
│   └── .env
│
├── ai-portfolio-frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md

````

---

## ⚙️ Environment Variables

### Backend (`/backend/.env`)
```env
PORT=5000
GROQ_API_KEY=
````

### Frontend (`/frontend/.env`)

```env
REACT_APP_API_URL=https://your-backend-url/api
```

---

## 🧪 Run Locally

### Clone Repository

```bash
git clone https://github.com/Vishesh9310/ai-portfolio-frontend.git
cd ai-portfolio-frontend
```

### Backend Setup

```bash
cd backend
npm install
npx nodemon server.js
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Security Notes

* AI API keys are **never exposed to frontend**
* `.env` files are excluded using `.gitignore`
* All AI requests are handled via backend APIs

---

## 📈 Future Enhancements

* User authentication & profiles
* Chat history storage
* WebSocket real-time messaging
* Admin dashboard
* Multi-AI model support

---

## 👨‍💻 Developer

**Vishesh Chauhan**

* GitHub: https://github.com/Vishesh9310
* LinkedIn: https://www.linkedin.com/in/vishesh9310/

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
