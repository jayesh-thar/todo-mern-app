# 🏗️ Application Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         Browser                              │
│                    http://localhost:5173                     │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTP Requests
                         │ (Axios)
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    React Frontend                            │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   App.jsx    │  │ TodoForm.jsx │  │ TodoList.jsx │     │
│  │              │  │              │  │              │     │
│  │ • State Mgmt │  │ • Add Todos  │  │ • Display    │     │
│  │ • API Calls  │  │ • Validation │  │ • Map Items  │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│         │                                     │             │
│         └─────────────────┬───────────────────┘             │
│                           │                                 │
│                    ┌──────────────┐                         │
│                    │ TodoItem.jsx │                         │
│                    │              │                         │
│                    │ • Edit       │                         │
│                    │ • Delete     │                         │
│                    │ • Toggle     │                         │
│                    └──────────────┘                         │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ REST API Calls
                         │ http://localhost:5000/api/todos
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                 Express.js Backend                           │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              server.js (Entry Point)                  │  │
│  │  • CORS Configuration                                 │  │
│  │  • JSON Parser                                        │  │
│  │  • Route Handler                                      │  │
│  └────────────────────┬─────────────────────────────────┘  │
│                       │                                     │
│         ┌─────────────┴─────────────┐                      │
│         │    todoRoutes.js          │                      │
│         │                            │                      │
│         │  GET    /api/todos         │  ← Get all          │
│         │  POST   /api/todos         │  ← Create           │
│         │  PUT    /api/todos/:id     │  ← Update           │
│         │  PATCH  /api/todos/:id/toggle  ← Toggle         │
│         │  DELETE /api/todos/:id     │  ← Delete           │
│         └────────────┬───────────────┘                      │
│                      │                                      │
│         ┌────────────▼────────────┐                         │
│         │     Todo.js (Model)     │                         │
│         │                         │                         │
│         │  Schema:                │                         │
│         │  • title: String        │                         │
│         │  • completed: Boolean   │                         │
│         │  • createdAt: Date      │                         │
│         └────────────┬────────────┘                         │
└──────────────────────┼──────────────────────────────────────┘
                       │
                       │ Mongoose ODM
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                     MongoDB Database                         │
│                mongodb://localhost:27017/todo-app            │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │           todos Collection                          │    │
│  │                                                     │    │
│  │  Document Structure:                               │    │
│  │  {                                                 │    │
│  │    _id: ObjectId,                                  │    │
│  │    title: "Buy groceries",                         │    │
│  │    completed: false,                               │    │
│  │    createdAt: ISODate("2024-01-01T00:00:00.000Z")  │    │
│  │  }                                                 │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. Adding a Todo

```
User types in TodoForm
      ↓
handleSubmit triggered
      ↓
App.addTodo(title)
      ↓
axios.post('/api/todos', {title})
      ↓
Express receives POST /api/todos
      ↓
todoRoutes.js creates new Todo
      ↓
Mongoose saves to MongoDB
      ↓
Response sent back to frontend
      ↓
State updated with new todo
      ↓
TodoList re-renders with new item
```

### 2. Editing a Todo

```
User clicks edit button on TodoItem
      ↓
setIsEditing(true) - shows input
      ↓
User types new text
      ↓
User clicks save or presses Enter
      ↓
App.updateTodo(id, newTitle)
      ↓
axios.put('/api/todos/:id', {title})
      ↓
Express receives PUT request
      ↓
Mongoose updates document in MongoDB
      ↓
Updated todo returned
      ↓
State updated with modified todo
      ↓
Component re-renders with new text
```

### 3. Toggling Completion

```
User clicks checkbox on TodoItem
      ↓
App.toggleTodo(id)
      ↓
axios.patch('/api/todos/:id/toggle')
      ↓
Express receives PATCH request
      ↓
Mongoose flips completed boolean
      ↓
Updated todo returned
      ↓
State updated
      ↓
Visual changes (strikethrough, color)
```

### 4. Deleting a Todo

```
User clicks delete button
      ↓
App.deleteTodo(id)
      ↓
axios.delete('/api/todos/:id')
      ↓
Express receives DELETE request
      ↓
Mongoose removes from MongoDB
      ↓
Success response returned
      ↓
Todo filtered out of state
      ↓
TodoList re-renders without item
```

## Component Hierarchy

```
App
├── TodoForm
│   └── Input + Add Button
│
└── TodoList
    └── TodoItem (multiple)
        ├── Checkbox (toggle)
        ├── Text/Input (edit mode)
        └── Action Buttons
            ├── Edit
            ├── Save
            ├── Cancel
            └── Delete
```

## State Management

### Frontend State (React)
- **todos**: Array of todo objects from database
- **loading**: Boolean for fetch status
- **error**: String for error messages
- **inputValue**: Current input text (TodoForm)
- **isEditing**: Boolean per TodoItem
- **editValue**: Temp text during edit (TodoItem)

### Backend State (MongoDB)
- Persistent storage of all todos
- Each document has unique _id
- Automatic timestamps

## API Contract

### Todo Object Structure

```javascript
{
  _id: "507f1f77bcf86cd799439011",  // MongoDB ObjectId
  title: "Buy groceries",             // String, required
  completed: false,                   // Boolean, default false
  createdAt: "2024-01-01T12:00:00Z"  // Date, auto-generated
}
```

### Request/Response Examples

#### Create Todo
```
POST /api/todos
Content-Type: application/json

{
  "title": "New task"
}

→ 201 Created
{
  "_id": "...",
  "title": "New task",
  "completed": false,
  "createdAt": "..."
}
```

#### Update Todo
```
PUT /api/todos/:id
Content-Type: application/json

{
  "title": "Updated task",
  "completed": true
}

→ 200 OK
{
  "_id": "...",
  "title": "Updated task",
  "completed": true,
  "createdAt": "..."
}
```

## Technology Stack Details

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React 18 | UI library with hooks |
| | Vite | Build tool and dev server |
| | Tailwind CSS | Utility-first styling |
| | Axios | HTTP client for API calls |
| **Backend** | Node.js | JavaScript runtime |
| | Express.js | Web framework |
| | Mongoose | MongoDB ODM |
| | CORS | Cross-origin resource sharing |
| **Database** | MongoDB | NoSQL document database |

## Security Considerations

- CORS configured to allow frontend origin
- Input validation on backend (title required)
- MongoDB injection protection via Mongoose
- Environment variables for sensitive config
- No authentication (add JWT for production)

## Performance Optimizations

- MongoDB indexing on _id (automatic)
- Sort todos by createdAt on server
- Optimistic UI updates possible
- Vite's hot module replacement
- React's virtual DOM reconciliation

## Future Enhancements

1. **Authentication**: Add user login with JWT
2. **Categories**: Organize todos by category
3. **Due Dates**: Add deadline functionality
4. **Priority Levels**: High/Medium/Low
5. **Search & Filter**: Find specific todos
6. **Drag & Drop**: Reorder todos
7. **Dark Mode**: Theme switching
8. **Sharing**: Collaborative todo lists
9. **Notifications**: Reminders for tasks
10. **Export**: Download todos as CSV/JSON

## Error Handling

### Frontend
- Try-catch blocks around API calls
- User-friendly error messages
- Loading states during async operations
- Form validation before submission

### Backend
- Route-level error handling
- Mongoose validation errors
- 404 for not found resources
- 500 for server errors
- Meaningful error responses

---

**This architecture provides a solid foundation for a production-ready todo application!**
