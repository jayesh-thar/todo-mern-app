# 📝 MERN Stack Todo List Application

A full-stack Todo List web application built with the MERN stack (MongoDB, Express.js, React, Node.js).

![MERN Stack](https://img.shields.io/badge/Stack-MERN-brightgreen)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Express](https://img.shields.io/badge/Backend-Express-lightgrey)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-brightgreen)

## ✨ Features

- ➕ **Create** new tasks
- ✏️ **Edit** existing tasks
- ✅ **Mark** tasks as complete/incomplete
- 🗑️ **Delete** tasks
- 💾 **Persistent** storage with MongoDB
- 📊 **Real-time** task counter (total/completed)
- 🎨 **Beautiful** gradient UI design
- 📱 **Responsive** design for all devices

## 🛠️ Tech Stack

### Frontend
- React 18
- Axios for API calls
- Modern CSS with gradients and animations
- Vite for fast development

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- RESTful API architecture
- CORS enabled

## 📸 Screenshots

*Add your screenshots here*

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/todo-mern-app.git
   cd todo-mern-app
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the `server` folder:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/todo-app
   ```

5. **Start MongoDB**
   ```bash
   # Windows
   net start MongoDB
   
   # Mac/Linux
   brew services start mongodb-community
   ```

6. **Start the backend server**
   ```bash
   cd server
   npm start
   ```

7. **Start the frontend**
   ```bash
   cd client
   npm run dev
   ```

8. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
todo-mern-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.jsx        # Main app component
│   │   ├── index.css      # Global styles
│   │   └── main.jsx       # Entry point
│   └── package.json
│
├── server/                # Node.js backend
│   ├── models/
│   │   └── Todo.js        # Mongoose schema
│   ├── routes/
│   │   └── todoRoutes.js  # API routes
│   ├── server.js          # Express server
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| GET | `/api/todos/:id` | Get single todo |
| POST | `/api/todos` | Create new todo |
| PUT | `/api/todos/:id` | Update todo |
| PATCH | `/api/todos/:id/toggle` | Toggle completion |
| DELETE | `/api/todos/:id` | Delete todo |

## 🎯 Usage

1. **Add a task** - Type in the input field and click "Add"
2. **Complete a task** - Click the checkbox to mark as done
3. **Edit a task** - Click the edit icon (✏️), modify text, and save
4. **Delete a task** - Click the delete icon (🗑️)
5. **View stats** - See total tasks and completed count at the top

## 🌐 Deployment

### Backend (Heroku)

1. Create a Heroku app
2. Set environment variables
3. Push to Heroku
4. Connect to MongoDB Atlas

### Frontend (Vercel/Netlify)

1. Build the production version: `npm run build`
2. Deploy the `dist` folder
3. Update API URL in the code

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your Profile](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- Built with the MERN stack
- Inspired by modern todo applications
- Thanks to the open-source community

## 📞 Support

If you have any questions or issues, please open an issue on GitHub.

---

⭐ **Star this repo if you found it helpful!** ⭐
