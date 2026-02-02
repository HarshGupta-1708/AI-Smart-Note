# Smart Notes App

**Smart Notes** is a modern full-stack web application designed to streamline note management with AI-powered capabilities. Create, organize, and enhance your notes with automatic summarization and intelligent tag suggestions powered by machine learning.

---

## 🌐 Live Application

Access the deployed application using the links below:

- **Frontend Application**: [https://smartnotes-indol.vercel.app/](https://smartnotes-indol.vercel.app/)
- **Backend API Server**: [https://smartnotes-1.onrender.com/](https://smartnotes-1.onrender.com/)

---

## ✨ Key Features

### User Management
- **User Authentication**: Secure signup and login using JWT tokens
- **Account Management**: User profiles with authentication control

### Note Operations
- **Create & Edit**: Full CRUD (Create, Read, Update, Delete) functionality for notes
- **Search & Filter**: Advanced search capabilities by content and tags
- **Pagination**: Efficient note list navigation with pagination support

### AI-Powered Intelligence
- **Automatic Summarization**: AI-generated summaries for long-form notes using Hugging Face's BART model
- **Smart Tag Suggestions**: Machine learning-based tag recommendations based on note content analysis
- **Content Analysis**: Intelligent parsing and understanding of note content

### User Experience
- **Responsive Design**: Optimized interface for desktop and mobile devices
- **Intuitive Navigation**: User-friendly interface with React Router
- **Real-time Updates**: Dynamic content updates without page refresh

---

## 🛠️ Technology Stack

### Frontend Application
| Technology | Version | Purpose |
|------------|---------|---------|
| React.js | 19.1.0 | UI library and component framework |
| React Router | 6.30.0 | Client-side navigation and routing |
| Axios | 1.9.0 | HTTP client for API requests |
| CSS | Custom | Styling and responsive layouts |

### Backend Infrastructure
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | Latest LTS | Runtime environment |
| Express | 5.1.0 | Web framework and API server |
| MongoDB | 8.14.1 | NoSQL database for data persistence |
| JWT | 9.0.2 | JSON Web Tokens for authentication |
| bcrypt | 3.0.2 | Password hashing and security |

### AI & Machine Learning
| Service | Provider | Purpose |
|---------|----------|---------|
| BART Summarization Model | Hugging Face Transformers | Automatic note summarization |
| Custom Tag Algorithm | In-house | Content-based tag suggestions |
| NLP Processing | Hugging Face API | Natural language processing

---

## 📁 Project Architecture

The project follows a standard full-stack structure with clear separation of concerns:

```
smart-notes-app/
│
├── client/                          # React Frontend Application
│   ├── public/                      # Static assets and index.html
│   ├── src/
│   │   ├── api/                     # API service modules
│   │   │   ├── auth.js              # Authentication API calls
│   │   │   ├── notes.js             # Note CRUD API calls
│   │   │   └── axios.js             # Axios configuration
│   │   ├── components/              # Reusable React components
│   │   │   ├── Header.js            # Navigation header
│   │   │   └── ProtectedRoute.js    # Route protection wrapper
│   │   ├── context/                 # React Context for state management
│   │   │   └── AuthContext.js       # Authentication context
│   │   ├── pages/                   # Page-level components
│   │   │   ├── Home.js              # Landing page
│   │   │   ├── Login.js             # Login page
│   │   │   ├── Register.js          # Registration page
│   │   │   ├── Dashboard.js         # Notes dashboard
│   │   │   ├── CreateNote.js        # Note creation
│   │   │   ├── EditNote.js          # Note editing
│   │   │   └── ViewNote.js          # Note viewing
│   │   ├── App.js                   # Main App component
│   │   └── index.js                 # React entry point
│   └── package.json                 # Frontend dependencies
│
└── server/                          # Node.js Backend Application
    ├── config/                      # Configuration files
    │   └── ai.js                    # AI service configuration
    ├── controllers/                 # Request handlers
    │   ├── userController.js        # User authentication logic
    │   └── noteController.js        # Note CRUD logic
    ├── middleware/                  # Custom middleware
    │   └── auth.js                  # JWT authentication middleware
    ├── models/                      # Database schemas
    │   ├── User.js                  # User data model
    │   └── Note.js                  # Note data model
    ├── routes/                      # API route definitions
    │   ├── userRoutes.js            # User endpoints
    │   └── noteRoutes.js            # Note endpoints
    ├── index.js                     # Express server entry point
    └── package.json                 # Backend dependencies
```

### Architecture Explanation

**Frontend (React)**
- Organized by feature with pages, components, and services
- Context API for global state management (authentication)
- API layer separation for clean data fetching

**Backend (Node.js/Express)**
- MVC pattern with clear separation of concerns
- Controllers handle business logic
- Models define data structures
- Middleware handles authentication and cross-cutting concerns
- Routes map HTTP endpoints to controller functions

---

## 📋 Prerequisites & Requirements

Before installing Smart Notes, ensure your system meets the following requirements:

### System Requirements
- **Node.js**: Version 14.0 or later (LTS versions recommended)
- **npm**: Version 6.0 or later (comes with Node.js)
- **Operating System**: Windows, macOS, or Linux
- **RAM**: Minimum 2GB for development

### Database
- **MongoDB**: Local installation or MongoDB Atlas cloud account (recommended)
- **MongoDB Version**: 4.0 or later

### API Credentials
- **Hugging Face Account**: Free account at [Hugging Face](https://huggingface.co/)
  - Required for AI summarization features
  - API key available from your account settings

### Optional
- **Git**: For version control and cloning the repository
- **Code Editor**: VS Code recommended for development
- **Postman**: For testing API endpoints

---

## 🚀 Installation & Setup Guide

Follow these step-by-step instructions to set up Smart Notes on your local machine.

### Step 1: Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/yourusername/smart-notes-app.git
cd smart-notes-app
```

**Explanation**: This command creates a local copy of the entire project including all code, configuration files, and version history.

---

### Step 2: Set Up Backend Server

#### 2.1 Navigate to Server Directory

```bash
cd server
```

#### 2.2 Install Backend Dependencies

```bash
npm install
```

**Explanation**: This command reads the `package.json` file and installs all required npm packages (Express, MongoDB, JWT, bcrypt, etc.) into the `node_modules` folder.

#### 2.3 Create Environment Configuration File

Create a `.env` file in the server directory with the following configuration:

```bash
# Server Configuration
PORT=5000

# Database Configuration
MONGO_URI=mongodb://localhost:27017/smart-notes

# JWT Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_value

# AI Services
HF_API_KEY=your_hugging_face_api_key_here
```

**Detailed Configuration Explanation**:

| Variable | Value | Description |
|----------|-------|-------------|
| `PORT` | 5000 | The port number on which your backend server will run |
| `MONGO_URI` | mongodb://localhost:27017/smart-notes | MongoDB connection string. For local: `mongodb://localhost:27017/smart-notes`. For MongoDB Atlas (cloud): Use your connection string from MongoDB Atlas dashboard |
| `JWT_SECRET` | Strong random string | Secret key used to sign JWT tokens. Use a strong, unique string with mix of uppercase, lowercase, numbers, and symbols |
| `HF_API_KEY` | Your API key | Hugging Face API key for accessing AI models. Get it from: https://huggingface.co/settings/tokens |

#### 2.4 MongoDB Setup

**Option A: Local MongoDB Installation**
```bash
# macOS (using Homebrew)
brew install mongodb-community
brew services start mongodb-community

# Linux (Ubuntu/Debian)
sudo apt-get install mongodb
sudo systemctl start mongodb

# Windows
# Download from https://www.mongodb.com/try/download/community
# Run installer and follow prompts
```

**Option B: MongoDB Atlas (Recommended)**
1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new project and cluster
4. Get your connection string
5. Replace the `MONGO_URI` in `.env` with your Atlas connection string

---

### Step 3: Set Up Frontend Application

#### 3.1 Navigate to Client Directory

Open a new terminal window and navigate to the client directory:

```bash
cd ../client
```

#### 3.2 Install Frontend Dependencies

```bash
npm install
```

**Explanation**: Installs all React and frontend dependencies (React, React Router, Axios, etc.).

#### 3.3 Configure API Base URL

**Important for Local Development**

Open the file [client/src/baseurl.js](client/src/baseurl.js) and update it as follows:

```javascript
// BEFORE (for production/deployed backend)
export const BASE_URL = "https://smartnotes-1.onrender.com";

// AFTER (for local development)
export const BASE_URL = "http://localhost:5000";
```

**Explanation**: 
- By default, the app connects to the deployed backend
- For local development, you need to point to your local server running on `http://localhost:5000`
- Change this back to the deployed URL when deploying to production

---

## ▶️ Running the Application

### Development Mode (Local Testing)

**Recommended for development and testing**

#### Step 1: Start MongoDB Server

```bash
# If using local MongoDB
mongod

# Note: On macOS with Homebrew, you might use:
brew services start mongodb-community

# If using MongoDB Atlas, you can skip this step
```

**Explanation**: MongoDB must be running to accept database connections. Skip this if using MongoDB Atlas.

#### Step 2: Start Backend Server (Terminal 1)

```bash
cd server
npm run dev
```

**Expected Output**:
```
[nodemon] starting `node index.js`
Server is running on port 5000
MongoDB connected successfully
```

**Explanation**: `npm run dev` uses nodemon which automatically restarts the server when you make code changes.

#### Step 3: Start Frontend Development Server (Terminal 2)

```bash
cd client
npm start
```

**Expected Output**:
```
Compiled successfully!

You can now view smart-notes in the browser.
  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000
```

**Explanation**: React development server provides hot reload - changes to code automatically refresh in the browser.

#### Step 4: Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

You should see the Smart Notes home page. Test the application by:
1. Registering a new account
2. Creating a note
3. Using the summarization and tag suggestion features

---

### Production Mode (Ready for Deployment)

#### Build the Frontend Application

```bash
cd client
npm run build
```

**Explanation**: 
- Creates optimized production build in `client/build/` folder
- Minifies and bundles all JavaScript and CSS
- Reduces file sizes for faster loading

#### Start Backend Server

```bash
cd server
npm start
```

**Access Production Build**: Navigate to `http://localhost:5000` (or your configured PORT)

---

### Quick Reference: Terminal Commands

| Task | Command | Location |
|------|---------|----------|
| Install backend dependencies | `npm install` | `/server` |
| Install frontend dependencies | `npm install` | `/client` |
| Start backend (dev mode) | `npm run dev` | `/server` |
| Start backend (production) | `npm start` | `/server` |
| Start frontend (dev mode) | `npm start` | `/client` |
| Build frontend | `npm run build` | `/client` |

## API Endpoints

### Authentication

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user
- `GET /api/users/profile` - Get user profile (protected)

### Notes

- `GET /api/notes` - Get all notes for the authenticated user
- `GET /api/notes/:id` - Get a specific note
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note
- `GET /api/notes/search` - Search notes by query
- `POST /api/notes/suggest-tags` - Get tag suggestions for note content

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**:

   - Ensure MongoDB is running
   - Check your MONGO_URI in the .env file
   - If using MongoDB Atlas, verify network access settings

2. **API Key Issues**:

   - Verify your Hugging Face API key is correct
   - Check for any rate limiting on the Hugging Face API

3. **CORS Errors**:

   - Ensure the BASE_URL in client/src/baseurl.js matches your server URL
   - Check that the server CORS configuration allows requests from your client

4. **JWT Authentication Errors**:
   - Clear browser cookies and local storage
   - Ensure JWT_SECRET is properly set in the .env file

### Deployment

The application is currently deployed with:

- Frontend: Deployed on [Vercel](https://vercel.com) at [https://smartnotes-indol.vercel.app/](https://smartnotes-indol.vercel.app/)
- Backend: Deployed on [Render](https://render.com) at [https://smartnotes-1.onrender.com/](https://smartnotes-1.onrender.com/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
