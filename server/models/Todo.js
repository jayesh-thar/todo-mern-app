// Import Mongoose
const mongoose = require('mongoose');

// Define Todo Schema
const todoSchema = new mongoose.Schema({
  // Task title/description
  title: {
    type: String,
    required: [true, 'Task title is required'],
    trim: true
  },
  // Completion status
  completed: {
    type: Boolean,
    default: false
  },
  // Creation timestamp
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export Todo model
module.exports = mongoose.model('Todo', todoSchema);
