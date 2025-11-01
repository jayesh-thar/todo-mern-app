import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add error boundary
  useEffect(() => {
    console.log('App component mounted');
    console.log('API URL:', API_URL);
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setTodos(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos. Make sure the backend server is running.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    try {
      const response = await axios.post(API_URL, { title: inputValue.trim() });
      setTodos([response.data, ...todos]);
      setInputValue('');
    } catch (err) {
      setError('Failed to add todo');
      console.error('Error adding todo:', err);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const response = await axios.patch(`${API_URL}/${id}/toggle`);
      setTodos(todos.map(todo => todo._id === id ? response.data : todo));
    } catch (err) {
      setError('Failed to toggle todo');
      console.error('Error toggling todo:', err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', err);
    }
  };

  const startEdit = (todo) => {
    setEditingId(todo._id);
    setEditValue(todo.title);
  };

  const saveEdit = async (id) => {
    if (!editValue.trim()) return;

    try {
      const response = await axios.put(`${API_URL}/${id}`, { title: editValue.trim() });
      setTodos(todos.map(todo => todo._id === id ? response.data : todo));
      setEditingId(null);
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.header}>
          <h1 style={styles.title}>✓ Todo List</h1>
          <p style={styles.subtitle}>Manage your tasks efficiently</p>
        </div>

        <div style={styles.card}>
          {error && (
            <div style={styles.error}>{error}</div>
          )}

          <form onSubmit={addTodo} style={styles.form}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new task..."
              style={styles.input}
            />
            <button type="submit" style={styles.addButton}>Add</button>
          </form>

          {loading ? (
            <div style={styles.loading}>
              <div style={styles.spinner}></div>
              <p>Loading todos...</p>
            </div>
          ) : (
            <>
              <div style={styles.stats}>
                <span>{todos.length} total tasks</span>
                <span>{todos.filter(t => t.completed).length} completed</span>
              </div>

              {todos.length === 0 ? (
                <div style={styles.empty}>
                  <div style={{ fontSize: '4rem' }}>📝</div>
                  <p>No tasks yet. Add one to get started!</p>
                </div>
              ) : (
                <div style={styles.todoList}>
                  {todos.map(todo => (
                    <div key={todo._id} style={{
                      ...styles.todoItem,
                      backgroundColor: todo.completed ? '#f3f4f6' : 'white'
                    }}>
                      <button
                        onClick={() => toggleTodo(todo._id)}
                        style={{
                          ...styles.checkbox,
                          backgroundColor: todo.completed ? '#10b981' : 'white',
                          borderColor: todo.completed ? '#10b981' : '#d1d5db'
                        }}
                      >
                        {todo.completed && <span style={styles.checkmark}>✓</span>}
                      </button>

                      {editingId === todo._id ? (
                        <input
                          type="text"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') saveEdit(todo._id);
                            if (e.key === 'Escape') cancelEdit();
                          }}
                          style={styles.editInput}
                          autoFocus
                        />
                      ) : (
                        <span style={{
                          ...styles.todoText,
                          textDecoration: todo.completed ? 'line-through' : 'none',
                          color: todo.completed ? '#9ca3af' : '#1f2937'
                        }}>
                          {todo.title}
                        </span>
                      )}

                      <div style={styles.actions}>
                        {editingId === todo._id ? (
                          <>
                            <button onClick={() => saveEdit(todo._id)} style={{ ...styles.actionButton, color: '#10b981' }} title="Save">💾</button>
                            <button onClick={cancelEdit} style={{ ...styles.actionButton, color: '#6b7280' }} title="Cancel">✖</button>
                          </>
                        ) : (
                          <>
                            <button onClick={() => startEdit(todo)} style={{ ...styles.actionButton, color: '#3b82f6' }} title="Edit" disabled={todo.completed}>✏️</button>
                            <button onClick={() => deleteTodo(todo._id)} style={{ ...styles.actionButton, color: '#ef4444' }} title="Delete">🗑️</button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        <div style={styles.footer}>
          <p>Built with MERN Stack</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '2rem 1rem'
  },
  wrapper: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1.1rem'
  },
  card: {
    background: 'white',
    borderRadius: '1rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    padding: '2rem'
  },
  error: {
    marginBottom: '1rem',
    padding: '1rem',
    background: '#fee2e2',
    border: '1px solid #fecaca',
    color: '#dc2626',
    borderRadius: '0.5rem'
  },
  form: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1.5rem'
  },
  input: {
    flex: 1,
    padding: '0.75rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s'
  },
  addButton: {
    padding: '0.75rem 1.5rem',
    background: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background 0.2s'
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  loading: {
    textAlign: 'center',
    padding: '2rem',
    color: '#6b7280'
  },
  spinner: {
    display: 'inline-block',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #667eea',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite',
    marginBottom: '1rem'
  },
  empty: {
    textAlign: 'center',
    padding: '3rem',
    color: '#6b7280'
  },
  todoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    transition: 'all 0.2s'
  },
  checkbox: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: '2px solid',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all 0.2s'
  },
  checkmark: {
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold'
  },
  todoText: {
    flex: 1,
    fontSize: '1rem'
  },
  editInput: {
    flex: 1,
    padding: '0.5rem',
    border: '1px solid #3b82f6',
    borderRadius: '0.25rem',
    fontSize: '1rem',
    outline: 'none'
  },
  actions: {
    display: 'flex',
    gap: '0.5rem',
    opacity: 0.7,
    transition: 'opacity 0.2s'
  },
  actionButton: {
    background: 'transparent',
    border: 'none',
    fontSize: '1.25rem',
    cursor: 'pointer',
    padding: '0.25rem',
    transition: 'transform 0.2s'
  },
  footer: {
    textAlign: 'center',
    marginTop: '2rem',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '0.875rem'
  }
};

export default App;
