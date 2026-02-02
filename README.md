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

---

## 📡 API Documentation

Smart Notes provides a comprehensive REST API for all backend operations. All protected endpoints require a valid JWT token in the Authorization header.

### Authentication Endpoints

#### Register New User
```http
POST /api/users/register
```

**Request Body**:
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123!"
}
```

**Response** (201 Created):
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "user_id_here",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

#### User Login
```http
POST /api/users/login
```

**Request Body**:
```json
{
  "email": "john@example.com",
  "password": "securePassword123!"
}
```

**Response** (200 OK):
```json
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

#### Get User Profile
```http
GET /api/users/profile
```

**Headers Required**:
```
Authorization: Bearer {jwt_token}
```

**Response** (200 OK):
```json
{
  "user": {
    "_id": "user_id_here",
    "username": "john_doe",
    "email": "john@example.com",
    "createdAt": "2025-01-15T10:30:00Z"
  }
}
```

---

### Note Management Endpoints

#### Retrieve All Notes
```http
GET /api/notes
```

**Headers Required**:
```
Authorization: Bearer {jwt_token}
```

**Query Parameters**:
- `page`: Page number for pagination (default: 1)
- `limit`: Notes per page (default: 10)

**Response** (200 OK):
```json
{
  "notes": [
    {
      "_id": "note_id_here",
      "title": "Meeting Notes",
      "content": "Discussion about Q1 goals...",
      "tags": ["meeting", "goals"],
      "summary": "Q1 goals and targets discussed",
      "createdAt": "2025-01-15T10:30:00Z",
      "updatedAt": "2025-01-15T10:30:00Z"
    }
  ],
  "totalNotes": 25,
  "totalPages": 3,
  "currentPage": 1
}
```

#### Get Specific Note
```http
GET /api/notes/:id
```

**Headers Required**:
```
Authorization: Bearer {jwt_token}
```

**Response** (200 OK):
```json
{
  "note": {
    "_id": "note_id_here",
    "title": "Meeting Notes",
    "content": "Full note content...",
    "tags": ["meeting", "goals"],
    "summary": "AI generated summary"
  }
}
```

#### Create New Note
```http
POST /api/notes
```

**Headers Required**:
```
Authorization: Bearer {jwt_token}
Content-Type: application/json
```

**Request Body**:
```json
{
  "title": "My First Note",
  "content": "This is the content of my note. It can be as long as needed..."
}
```

**Response** (201 Created):
```json
{
  "message": "Note created successfully",
  "note": {
    "_id": "new_note_id",
    "title": "My First Note",
    "content": "This is the content...",
    "tags": [],
    "summary": "AI generated summary"
  }
}
```

#### Update Note
```http
PUT /api/notes/:id
```

**Headers Required**:
```
Authorization: Bearer {jwt_token}
Content-Type: application/json
```

**Request Body**:
```json
{
  "title": "Updated Title",
  "content": "Updated content...",
  "tags": ["updated", "tag"]
}
```

**Response** (200 OK):
```json
{
  "message": "Note updated successfully",
  "note": {
    "_id": "note_id_here",
    "title": "Updated Title",
    "content": "Updated content..."
  }
}
```

#### Delete Note
```http
DELETE /api/notes/:id
```

**Headers Required**:
```
Authorization: Bearer {jwt_token}
```

**Response** (200 OK):
```json
{
  "message": "Note deleted successfully"
}
```

#### Search Notes
```http
GET /api/notes/search?query=keyword
```

**Headers Required**:
```
Authorization: Bearer {jwt_token}
```

**Query Parameters**:
- `query`: Search term (searches in title and content)

**Response** (200 OK):
```json
{
  "results": [
    {
      "_id": "note_id",
      "title": "Note Title",
      "content": "Content matching query...",
      "tags": ["tag1", "tag2"]
    }
  ],
  "count": 5
}
```

#### Get AI Tag Suggestions
```http
POST /api/notes/suggest-tags
```

**Headers Required**:
```
Authorization: Bearer {jwt_token}
Content-Type: application/json
```

**Request Body**:
```json
{
  "content": "The note content that you want tags for..."
}
```

**Response** (200 OK):
```json
{
  "suggestedTags": ["tag1", "tag2", "tag3"],
  "confidence": 0.85
}
```

---

## 🔧 Troubleshooting Guide

### Database Connection Issues

#### Problem: "MongooseError: Cannot connect to MongoDB"

**Solutions**:
1. Verify MongoDB is running:
   ```bash
   # Check if MongoDB service is running
   sudo systemctl status mongodb  # Linux
   brew services list             # macOS
   ```

2. Check your `MONGO_URI` in `.env`:
   - For local MongoDB: `mongodb://localhost:27017/smart-notes`
   - For MongoDB Atlas: Verify connection string is correct

3. If using MongoDB Atlas:
   - Whitelist your IP address in Atlas dashboard
   - Use correct username and password
   - Ensure cluster is active

#### Problem: "ECONNREFUSED: Connection refused"

**Solution**: Start MongoDB service:
```bash
# macOS
brew services start mongodb-community

# Linux (Ubuntu)
sudo systemctl start mongodb

# Windows - Run MongoDB locally or use Atlas
```

---

### Authentication & API Key Issues

#### Problem: "Invalid API Key" from Hugging Face

**Solution**:
1. Verify your API key is correct: [Hugging Face Settings](https://huggingface.co/settings/tokens)
2. Create a new token if needed
3. Update `HF_API_KEY` in `.env` file
4. Restart the backend server

#### Problem: "JWT Authentication Failed"

**Solutions**:
1. Clear browser cookies and local storage:
   ```javascript
   // In browser console
   localStorage.clear();
   sessionStorage.clear();
   ```

2. Verify `JWT_SECRET` is set in `.env`

3. Check that Authorization header is included in requests:
   ```
   Authorization: Bearer {token}
   ```

---

### CORS & Connection Errors

#### Problem: "CORS error" or "Access-Control-Allow-Origin"

**Causes & Solutions**:
1. Verify `BASE_URL` in [client/src/baseurl.js](client/src/baseurl.js):
   - Development: `http://localhost:5000`
   - Production: Your deployed backend URL

2. Check backend server is running on correct PORT

3. Verify CORS middleware is configured in backend

#### Problem: "Network error: Failed to fetch"

**Solutions**:
1. Ensure backend server is running
2. Check backend is accessible at configured URL
3. Verify firewall allows connections on the PORT
4. Check browser console for specific error messages

---

### Frontend Issues

#### Problem: Blank page or "Cannot find module"

**Solutions**:
1. Clear node_modules and reinstall:
   ```bash
   cd client
   rm -rf node_modules
   npm install
   ```

2. Clear React cache:
   ```bash
   npm start -- --reset-cache
   ```

3. Check for syntax errors in code

#### Problem: "Port 3000 is already in use"

**Solutions**:
1. Kill the process using port 3000:
   ```bash
   # macOS/Linux
   lsof -ti:3000 | xargs kill -9
   
   # Windows (PowerShell)
   Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
   ```

2. Or run on a different port:
   ```bash
   PORT=3001 npm start
   ```

---

### Backend Issues

#### Problem: "Port 5000 is already in use"

**Solutions**:
1. Find and stop the process:
   ```bash
   # macOS/Linux
   lsof -ti:5000 | xargs kill -9
   
   # Windows (PowerShell)
   Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process
   ```

2. Configure different port in `.env`:
   ```
   PORT=5001
   ```

#### Problem: "nodemon command not found"

**Solution**:
```bash
cd server
npm install --save-dev nodemon
npm run dev
```

---

### Debugging Tips

**Enable Verbose Logging**:

Update `server/index.js` to add logging:
```javascript
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
```

**Check Environment Variables**:
```bash
# In server directory
cat .env  # macOS/Linux
type .env # Windows
```

**Test API Endpoints**:
Use Postman or curl to test API:
```bash
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"pass"}'
```

---

## 🌍 Deployment Guide

Smart Notes is deployed across multiple cloud platforms for optimal performance and scalability.

### Frontend Deployment (Vercel)

**Current Deployment**: [https://smartnotes-indol.vercel.app/](https://smartnotes-indol.vercel.app/)

**Steps to Deploy**:

1. **Push code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Visit [Vercel](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select the smart-notes repository

3. **Configure Settings**:
   - Framework: React
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `build`

4. **Set Environment Variables**:
   - `REACT_APP_BASE_URL`: Your deployed backend URL
   - Update [client/src/baseurl.js](client/src/baseurl.js) before deployment

5. **Deploy**: Click "Deploy"

**Post-Deployment**:
- Your frontend will be available at: `https://yourdomain.vercel.app/`
- Vercel provides automatic HTTPS
- Automatic deployments on every push to main branch

---

### Backend Deployment (Render)

**Current Deployment**: [https://smartnotes-1.onrender.com/](https://smartnotes-1.onrender.com/)

**Steps to Deploy**:

1. **Push code to GitHub**:
   ```bash
   git add .
   git commit -m "Backend ready for deployment"
   git push origin main
   ```

2. **Connect to Render**:
   - Visit [Render](https://render.com)
   - Sign in with GitHub
   - Click "New +" → "Web Service"
   - Select the smart-notes repository

3. **Configure Settings**:
   - Name: `smart-notes-api`
   - Environment: `Node`
   - Region: Closest to your users
   - Build Command: `npm install`
   - Start Command: `node server/index.js`
   - Root Directory: Leave empty or set to `server`

4. **Set Environment Variables**:
   - `PORT`: 5000
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Strong random secret key
   - `HF_API_KEY`: Your Hugging Face API key

5. **Create & Deploy**: Click "Create Web Service"

**Post-Deployment**:
- Your backend will be available at: `https://yourdomain.onrender.com/`
- Auto-restart on deployment
- Update frontend BASE_URL to point to this URL

---

### Database Deployment (MongoDB Atlas)

**Setup MongoDB Cloud Database**:

1. **Create MongoDB Atlas Account**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

2. **Create a Cluster**:
   - Select M0 Sandbox (free tier)
   - Choose region closest to your backend
   - Create cluster

3. **Create Database User**:
   - Go to "Database Access"
   - Create new user with strong password
   - Save credentials

4. **Whitelist IP Addresses**:
   - Go to "Network Access"
   - Add your Render/backend server IP: `0.0.0.0/0` (allows all)
   - Or add specific IPs for security

5. **Get Connection String**:
   - Click "Connect"
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your database user password
   - Use as `MONGO_URI` in backend .env

**Connection String Format**:
```
mongodb+srv://username:password@cluster.mongodb.net/database-name
```

---

### Deployment Checklist

Before deploying, ensure:

- [ ] All code is committed to GitHub
- [ ] `package.json` has all required dependencies
- [ ] `.env` file is NOT committed (add to .gitignore)
- [ ] Frontend BASE_URL points to deployed backend
- [ ] Backend environment variables are configured
- [ ] MongoDB Atlas cluster is active
- [ ] Hugging Face API key is valid
- [ ] All tests pass locally
- [ ] No console errors or warnings

---

### Monitoring & Maintenance

**Check Backend Status**:
```bash
# Test API is running
curl https://your-backend-url/api/users/profile

# Should return CORS error or 401 unauthorized (expected)
```

**View Logs**:
- **Vercel**: Dashboard → Deployments → Logs
- **Render**: Dashboard → Logs
- **MongoDB Atlas**: Clusters → Logs

**Performance Optimization**:
- Enable GZIP compression on server
- Implement caching strategies
- Optimize database queries
- Use CDN for static assets

---

## 📚 Additional Resources

### Learning Resources

| Topic | Resource | Description |
|-------|----------|-------------|
| **React** | [React Documentation](https://react.dev) | Official React guide and API reference |
| **Node.js** | [Node.js Docs](https://nodejs.org/docs) | Node.js official documentation |
| **Express** | [Express Guide](https://expressjs.com) | Express.js framework documentation |
| **MongoDB** | [MongoDB Manual](https://docs.mongodb.com/manual) | Comprehensive MongoDB guide |
| **JWT** | [JWT Introduction](https://jwt.io/introduction) | Understanding JSON Web Tokens |
| **REST API** | [REST API Best Practices](https://restfulapi.net) | RESTful API design patterns |

### Tools & Services

| Tool | Link | Purpose |
|------|------|---------|
| **Postman** | [postman.com](https://www.postman.com) | API testing and development |
| **MongoDB Compass** | [MongoDB Compass](https://www.mongodb.com/products/compass) | MongoDB GUI client |
| **VS Code** | [code.visualstudio.com](https://code.visualstudio.com) | Code editor |
| **Git** | [git-scm.com](https://git-scm.com) | Version control |
| **Hugging Face** | [huggingface.co](https://huggingface.co) | AI model hosting |

### Community & Support

- **GitHub Issues**: Report bugs and request features
- **GitHub Discussions**: Ask questions and share ideas
- **Stack Overflow**: Tag with `[react]`, `[node.js]`, or `[mongodb]`
- **Communities**: 
  - React: [React Community](https://react.dev/community)
  - Node.js: [Node.js Community](https://nodejs.org/en/get-involved)

---

## 📝 License

This project is licensed under the **MIT License** - see the LICENSE file for full details.

### MIT License Summary

You are free to:
- ✅ Use this project commercially
- ✅ Modify the code
- ✅ Distribute the project
- ✅ Include in private use

With the conditions:
- ⚠️ Include a copy of the license
- ⚠️ Include copyright notice
- ⚠️ State significant changes made

---

## 🤝 Contributing

Contributions are welcome and encouraged! Here's how to contribute:

### How to Contribute

1. **Fork the Repository**
   ```bash
   # Click Fork on GitHub
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Changes**
   - Write clean, readable code
   - Follow project conventions
   - Add comments for complex logic

4. **Test Your Changes**
   - Test locally on both dev and production modes
   - Check API endpoints with Postman
   - Verify responsive design

5. **Commit Changes**
   ```bash
   git add .
   git commit -m "Add amazing feature"
   ```

6. **Push to Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open Pull Request**
   - Describe your changes clearly
   - Reference related issues
   - Wait for review and feedback

### Contribution Guidelines

- Follow existing code style and conventions
- Add comments and documentation
- Test thoroughly before submitting
- Update README if adding features
- Be respectful and constructive in discussions

---

## 👥 Authors

**Project Lead**: [Your Name]
- GitHub: [@yourusername](https://github.com/yourusername)

### Team Members
- [Team Member 1]
- [Team Member 2]

---

## 📞 Support & Contact

### Getting Help

1. **Check the Troubleshooting Section**: Many common issues are covered above
2. **Search Existing Issues**: Look for similar problems on GitHub
3. **Ask on Stack Overflow**: Use relevant tags for visibility
4. **Open a GitHub Issue**: Provide detailed information about your problem

### Issue Template

When reporting issues, include:
- What you were doing
- What you expected to happen
- What actually happened
- Steps to reproduce the issue
- Environment details (OS, Node version, etc.)
- Error messages and logs

---

## 🗺️ Project Roadmap

### Current Version
- ✅ User authentication
- ✅ CRUD operations for notes
- ✅ AI summarization
- ✅ Tag suggestions
- ✅ Search functionality

### Planned Features
- [ ] Shared notes and collaboration
- [ ] Note categories/folders
- [ ] Dark mode
- [ ] Export to PDF
- [ ] Rich text editor
- [ ] Note versioning
- [ ] Mobile app

### Future Enhancements
- [ ] Advanced search with filters
- [ ] Custom themes
- [ ] Multi-language support
- [ ] Browser extensions
- [ ] AI-powered note recommendations

---

## 🙏 Acknowledgments

- **Hugging Face**: For providing AI models and APIs
- **MongoDB**: For reliable database solutions
- **Vercel & Render**: For deployment platforms
- **Open Source Community**: For amazing tools and libraries
- **All Contributors**: For their valuable contributions

---

## 📜 Version History

| Version | Date | Major Changes |
|---------|------|---------------|
| 1.0.0 | 2025-01-15 | Initial release with core features |

---

## 🔒 Security Notice

### Keeping Your Application Secure

- ✅ Never commit `.env` files with real credentials
- ✅ Use strong JWT_SECRET (minimum 32 characters)
- ✅ Use environment variables for sensitive data
- ✅ Validate and sanitize user inputs
- ✅ Use HTTPS in production
- ✅ Keep dependencies updated: `npm audit fix`
- ✅ Implement rate limiting for APIs
- ✅ Use secure MongoDB Atlas IP whitelisting

### Reporting Security Issues

Found a security vulnerability? Please email [security@yourdomain.com] instead of using GitHub issues.

---

**Happy Note-Taking! 🚀**

For the latest updates and issues, visit our [GitHub Repository](https://github.com/yourusername/smart-notes-app)
