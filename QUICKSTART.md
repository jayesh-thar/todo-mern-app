# 🚀 Quick Start Guide

Get your MERN Todo App running in minutes!

## Prerequisites Check

Before starting, ensure you have:
- ✅ Node.js installed (v14+): `node --version`
- ✅ MongoDB installed and running
- ✅ npm or yarn installed

## Step 1: Start MongoDB

### Windows:
```bash
# Start MongoDB service
net start MongoDB

# OR if installed manually, run:
mongod
```

### Mac/Linux:
```bash
# Start MongoDB service
sudo systemctl start mongod

# OR
brew services start mongodb-community
```

### Verify MongoDB is Running:
```bash
# In a new terminal
mongosh
# or
mongo
```

## Step 2: Start the Backend Server

Open a terminal and run:

```bash
cd todo-mern-app/server
npm start
```

You should see:
```
🚀 Server running on port 5000
✅ Connected to MongoDB
```

**Keep this terminal running!**

## Step 3: Start the Frontend

Open a **NEW** terminal and run:

```bash
cd todo-mern-app/client
npm run dev
```

You should see:
```
  VITE ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## Step 4: Open the App

Open your browser and go to:
```
http://localhost:5173
```

🎉 **You're done!** Start adding todos!

---

## Troubleshooting

### Problem: MongoDB Connection Error

**Error:** `MongoDB connection error`

**Solution:**
1. Make sure MongoDB is running:
   ```bash
   # Windows
   net start MongoDB
   
   # Mac/Linux
   brew services start mongodb-community
   ```

2. Check if MongoDB is on port 27017:
   ```bash
   netstat -ano | findstr :27017
   ```

### Problem: Port 5000 Already in Use

**Error:** `Port 5000 is already in use`

**Solution:**
1. Edit `server/.env`:
   ```
   PORT=5001
   ```

2. Update `client/src/App.jsx`:
   ```javascript
   const API_URL = 'http://localhost:5001/api/todos';
   ```

### Problem: CORS Error

**Error:** `Access to fetch blocked by CORS policy`

**Solution:**
- Make sure backend server is running on port 5000
- Frontend should be on a different port (5173)
- Check `server/server.js` has `app.use(cors())`

### Problem: Cannot Find Module

**Error:** `Cannot find module 'express'`

**Solution:**
```bash
# Reinstall dependencies
cd server
npm install

cd ../client
npm install
```

---

## Quick Commands Reference

### Install all dependencies at once:
```bash
cd todo-mern-app
npm run install-all
```

### Run backend in development mode (with auto-reload):
```bash
cd server
npm run dev
```

### Build frontend for production:
```bash
cd client
npm run build
```

---

## Default Configuration

| Service | Port | URL |
|---------|------|-----|
| Frontend | 5173 | http://localhost:5173 |
| Backend API | 5000 | http://localhost:5000 |
| MongoDB | 27017 | mongodb://localhost:27017/todo-app |

---

## Testing the API Manually

You can test the backend API with curl or Postman:

### Get all todos:
```bash
curl http://localhost:5000/api/todos
```

### Create a todo:
```bash
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Todo"}'
```

### Update a todo:
```bash
curl -X PUT http://localhost:5000/api/todos/YOUR_TODO_ID \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Todo"}'
```

### Delete a todo:
```bash
curl -X DELETE http://localhost:5000/api/todos/YOUR_TODO_ID
```

---

## Next Steps

1. ✅ Add more todos
2. ✅ Try editing and deleting
3. ✅ Refresh the page - data persists!
4. 🎨 Customize the styling in the components
5. 🔧 Extend with new features

**Happy coding!** 🚀
