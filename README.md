# Smart Notes App

A full-stack web application for creating, editing, and managing notes with AI-powered summarization and tag suggestions.

**Live Demo**: [Frontend](https://smartnotes-indol.vercel.app/) | [Backend API](https://smartnotes-1.onrender.com/)

## ✨ Features

- User authentication (signup, login) with JWT
- Create, read, update, and delete notes
- Search notes by content or tags
- AI-generated summaries using Hugging Face's BART model
- AI-powered tag suggestions
- Pagination support
- Responsive design for mobile and desktop

## 🛠️ Tech Stack

**Frontend**: React 19, React Router 6, Axios
**Backend**: Node.js, Express 5, MongoDB 8
**AI**: Hugging Face API, BART model
**Security**: JWT, bcrypt

## 📁 Project Structure

```
smart-notes-app/
├── client/              # React frontend
│   └── src/
│       ├── api/         # API services
│       ├── pages/       # Page components
│       ├── components/  # UI components
│       └── context/     # State management
└── server/              # Node.js backend
    ├── controllers/     # Route logic
    ├── models/          # Database schemas
    ├── routes/          # API endpoints
    ├── middleware/      # Auth middleware
    └── config/          # Configuration

## 📋 Prerequisites

- Node.js v14 or later
- MongoDB (local or MongoDB Atlas)
- Hugging Face API key (free account at [huggingface.co](https://huggingface.co))

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/HarshGupta-1708/AI-Smart-Note.git
cd AI-Smart-Note

# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 2. Configure Environment

Create `server/.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/smart-notes
JWT_SECRET=your_secret_key_here
HF_API_KEY=your_huggingface_key
```

Update `client/src/baseurl.js`:
```javascript
export const BASE_URL = "http://localhost:5000";
```

### 3. Start Application

**Terminal 1 - Backend**:
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend**:
```bash
cd client
npm start
```

Open `http://localhost:3000` in your browser.

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/register` | Register new user |
| POST | `/api/users/login` | User login |
| GET | `/api/notes` | Get all notes |
| POST | `/api/notes` | Create note |
| PUT | `/api/notes/:id` | Update note |
| DELETE | `/api/notes/:id` | Delete note |
| GET | `/api/notes/search?query=` | Search notes |
| POST | `/api/notes/suggest-tags` | Get tag suggestions |

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB connection error | Ensure MongoDB is running or use MongoDB Atlas |
| Port already in use | Change PORT in `.env` or kill process on port |
| CORS error | Verify BASE_URL matches server URL |
| API key error | Check Hugging Face API key in `.env` |

## 🌍 Deployment

- **Frontend**: Deploy on [Vercel](https://vercel.com)
- **Backend**: Deploy on [Render](https://render.com)
- **Database**: Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## 📚 Resources

- [React Docs](https://react.dev)
- [Node.js Docs](https://nodejs.org/docs)
- [MongoDB Manual](https://docs.mongodb.com/manual)
- [Express Guide](https://expressjs.com)
- [Hugging Face](https://huggingface.co)
- [JWT Info](https://jwt.io)

## 📄 License

MIT License - See LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a pull request

## 📞 Support

For issues or questions:
- Open a [GitHub Issue](https://github.com/HarshGupta-1708/AI-Smart-Note/issues)
- Check the Troubleshooting section above

---

**Happy Note-Taking! 🚀**
