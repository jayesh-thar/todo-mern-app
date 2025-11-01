# ✅ Getting Started Checklist

Follow this checklist to get your MERN Todo App up and running!

## Pre-Flight Checklist

### 1. Prerequisites Installed
- [ ] Node.js (v14 or higher)
  ```bash
  node --version
  ```
- [ ] npm package manager
  ```bash
  npm --version
  ```
- [ ] MongoDB installed
  ```bash
  mongod --version
  ```

### 2. MongoDB Running
- [ ] MongoDB service is started
  
  **Windows:**
  ```bash
  net start MongoDB
  ```
  
  **Mac:**
  ```bash
  brew services start mongodb-community
  ```
  
  **Linux:**
  ```bash
  sudo systemctl start mongod
  ```

- [ ] Verify MongoDB is accessible
  ```bash
  mongosh
  # or
  mongo
  ```

## Installation Checklist

### 3. Navigate to Project
- [ ] Open terminal/command prompt
- [ ] Navigate to project directory
  ```bash
  cd path/to/todo-mern-app
  ```

### 4. Install Backend Dependencies
- [ ] Go to server folder
  ```bash
  cd server
  ```
- [ ] Install packages
  ```bash
  npm install
  ```
- [ ] Wait for installation to complete
- [ ] Verify no errors in terminal

### 5. Install Frontend Dependencies
- [ ] Go to client folder
  ```bash
  cd ../client
  ```
- [ ] Install packages
  ```bash
  npm install
  ```
- [ ] Wait for installation to complete
- [ ] Verify no errors in terminal

## Configuration Checklist

### 6. Verify Backend Configuration
- [ ] Check `server/.env` file exists
- [ ] Verify MongoDB URI is correct:
  ```
  MONGODB_URI=mongodb://localhost:27017/todo-app
  ```
- [ ] Verify PORT is set:
  ```
  PORT=5000
  ```

### 7. Verify Frontend Configuration
- [ ] Check `client/src/App.jsx`
- [ ] Verify API_URL matches backend:
  ```javascript
  const API_URL = 'http://localhost:5000/api/todos';
  ```

## Launch Checklist

### 8. Start Backend Server
- [ ] Open first terminal window
- [ ] Navigate to server folder
  ```bash
  cd server
  ```
- [ ] Start the server
  ```bash
  npm start
  ```
- [ ] Wait for success messages:
  - `🚀 Server running on port 5000`
  - `✅ Connected to MongoDB`
- [ ] **Keep this terminal running!**

### 9. Start Frontend Application
- [ ] Open second terminal window
- [ ] Navigate to client folder
  ```bash
  cd client
  ```
- [ ] Start the development server
  ```bash
  npm run dev
  ```
- [ ] Wait for Vite to start
- [ ] Note the local URL (usually `http://localhost:5173`)
- [ ] **Keep this terminal running too!**

### 10. Open in Browser
- [ ] Open your web browser
- [ ] Go to `http://localhost:5173`
- [ ] Page should load without errors
- [ ] You should see "✓ Todo List" header

## Testing Checklist

### 11. Test Add Functionality
- [ ] Type a task in the input box
- [ ] Click "Add" button
- [ ] New task appears in the list
- [ ] Input box clears after adding

### 12. Test Complete Functionality
- [ ] Click the checkbox on a task
- [ ] Task text gets a strikethrough
- [ ] Task background changes color
- [ ] Completed counter updates

### 13. Test Edit Functionality
- [ ] Hover over a task
- [ ] Click the pencil (edit) icon
- [ ] Input field appears
- [ ] Type new text
- [ ] Click save (checkmark) or press Enter
- [ ] Task updates with new text

### 14. Test Delete Functionality
- [ ] Hover over a task
- [ ] Click the trash (delete) icon
- [ ] Task disappears from list
- [ ] Total task count updates

### 15. Test Persistence
- [ ] Add several tasks
- [ ] Mark some as complete
- [ ] Refresh the browser page (F5)
- [ ] All tasks should still be there
- [ ] Completion status should be preserved

## Troubleshooting Checklist

### If Backend Won't Start
- [ ] Check MongoDB is running
- [ ] Check port 5000 is not in use
- [ ] Verify `node_modules` folder exists in `server/`
- [ ] Try reinstalling: `npm install`
- [ ] Check for error messages in terminal

### If Frontend Won't Start
- [ ] Check port 5173 is not in use
- [ ] Verify `node_modules` folder exists in `client/`
- [ ] Try reinstalling: `npm install`
- [ ] Check for error messages in terminal

### If "Failed to fetch todos" Error
- [ ] Verify backend is running
- [ ] Check backend terminal for errors
- [ ] Verify MongoDB is running
- [ ] Check API_URL in `client/src/App.jsx`
- [ ] Test backend directly: `http://localhost:5000/api/todos`

### If CORS Error
- [ ] Verify CORS is enabled in `server/server.js`
- [ ] Check backend is on port 5000
- [ ] Check frontend is on port 5173
- [ ] Restart both servers

### If Cannot Connect to MongoDB
- [ ] Start MongoDB service
- [ ] Check MongoDB is on port 27017
- [ ] Verify connection string in `server/.env`
- [ ] Try connecting with `mongosh` to verify

## Success Indicators ✅

You know everything is working when:

- ✅ Backend shows: "Server running on port 5000"
- ✅ Backend shows: "Connected to MongoDB"
- ✅ Frontend loads without errors
- ✅ You can add new tasks
- ✅ You can edit tasks
- ✅ You can complete tasks
- ✅ You can delete tasks
- ✅ Tasks persist after page refresh
- ✅ No console errors in browser dev tools
- ✅ Both terminals remain error-free

## Quick Commands Reference

```bash
# Start everything (from project root)
# Terminal 1:
cd server && npm start

# Terminal 2:
cd client && npm run dev

# Or use the startup script:
# Windows:
start-app.bat

# Mac/Linux:
chmod +x start-app.sh
./start-app.sh
```

## Next Steps After Setup

1. [ ] Read through `README.md` for detailed documentation
2. [ ] Explore `ARCHITECTURE.md` to understand the structure
3. [ ] Review code comments in the files
4. [ ] Try adding new features
5. [ ] Customize the styling
6. [ ] Deploy to production (Heroku, Vercel, etc.)

---

## ✨ Congratulations!

If you've checked all these boxes, your MERN Todo App is fully operational!

**Happy coding!** 🚀

---

*For more help, see:*
- `QUICKSTART.md` - Fast setup guide
- `README.md` - Complete documentation
- `ARCHITECTURE.md` - Technical details
- `PROJECT_SUMMARY.md` - Project overview
