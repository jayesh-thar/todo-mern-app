# MERN Stack Todo List Application

A modern, minimal Todo List web application built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS.

## ✨ Features

- ✅ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- ✓ Mark tasks as complete/incomplete
- 💾 Persistent storage with MongoDB
- 🎨 Clean, modern, and responsive UI
- ⚡ Real-time updates
- 🔄 RESTful API architecture

## 🛠️ Tech Stack

**Frontend:**
- React 18 with Hooks
- Tailwind CSS for styling
- Axios for API calls
- Vite for build tooling

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## 📁 Project Structure

```
todo-mern-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── TodoForm.jsx
│   │   │   ├── TodoList.jsx
│   │   │   └── TodoItem.jsx
│   │   ├── App.jsx        # Main app component
│   │   ├── index.css      # Tailwind imports
│   │   └── main.jsx       # Entry point
│   ├── package.json
│   └── tailwind.config.js
│
└── server/                # Node.js backend
    ├── models/
    │   └── Todo.js        # Mongoose model
    ├── routes/
    │   └── todoRoutes.js  # API routes
    ├── server.js          # Express server
    ├── .env               # Environment variables
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd todo-mern-app
   ```

2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```

4. **Configure MongoDB:**
   - Make sure MongoDB is running on your machine
   - Default connection: `mongodb://localhost:27017/todo-app`
   - To change, edit `server/.env` file

### Running the Application

**Option 1: Run both servers separately**

Terminal 1 - Start Backend:
```bash
cd server
npm start
# Server runs on http://localhost:5000
```

Terminal 2 - Start Frontend:
```bash
cd client
npm run dev
# Client runs on http://localhost:5173
```

**Option 2: Development with auto-reload**

For backend with nodemon:
```bash
cd server
npm run dev
```

### 🌐 Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

The frontend will communicate with the backend API at `http://localhost:5000`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| GET | `/api/todos/:id` | Get single todo |
| POST | `/api/todos` | Create new todo |
| PUT | `/api/todos/:id` | Update todo |
| PATCH | `/api/todos/:id/toggle` | Toggle completion |
| DELETE | `/api/todos/:id` | Delete todo |

## 🎨 UI Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern Aesthetics**: Clean gradient background with smooth transitions
- **Interactive Elements**: Hover effects and smooth animations
- **Status Indicators**: Visual feedback for completed tasks
- **Empty State**: Helpful message when no tasks exist
- **Loading States**: Spinner during data fetching
- **Error Handling**: User-friendly error messages

## 🧩 Component Architecture

### App.jsx
Main application component that:
- Manages global state
- Handles API calls
- Passes data and functions to child components

### TodoForm.jsx
Form component for adding new todos:
- Controlled input field
- Form validation
- Submit handling

### TodoList.jsx
List container component:
- Renders TodoItem components
- Handles empty state
- Maps through todos array

### TodoItem.jsx
Individual todo item component:
- Toggle completion checkbox
- Inline editing capability
- Delete functionality
- Smooth animations and hover effects

## 🔧 Customization

### Change API URL
Edit `client/src/App.jsx`:
```javascript
const API_URL = 'http://your-backend-url/api/todos';
```

### Change MongoDB Connection
Edit `server/.env`:
```
MONGODB_URI=mongodb://your-connection-string
PORT=5000
```

### Styling
Modify Tailwind classes in components or extend `tailwind.config.js`

## 📦 Build for Production

Build the React frontend:
```bash
cd client
npm run build
```

The optimized files will be in `client/dist/`

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running: `mongod`
- Check connection string in `server/.env`

**CORS Error:**
- Backend and frontend must be on different ports
- CORS is enabled in `server/server.js`

**Port Already in Use:**
- Change port in `server/.env`
- Update API_URL in `client/src/App.jsx`

## 📝 License

MIT License - feel free to use this project for learning or production!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Built with ❤️ using the MERN stack
