import { useState } from 'react';

/**
 * TodoItem Component
 * Individual todo item with edit, delete, and complete functionality
 */
function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  // Handle edit save
  const handleSave = async () => {
    if (!editValue.trim()) {
      return;
    }
    
    const success = await onUpdate(todo._id, editValue.trim());
    
    if (success) {
      setIsEditing(false);
    }
  };

  // Handle edit cancel
  const handleCancel = () => {
    setEditValue(todo.title);
    setIsEditing(false);
  };

  // Handle Enter key in edit mode
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div
      className={`group flex items-center gap-3 p-4 rounded-lg border transition-all ${
        todo.completed
          ? 'bg-gray-50 border-gray-200'
          : 'bg-white border-gray-300 hover:border-blue-300 hover:shadow-md'
      }`}
    >
      {/* Checkbox - Toggle completion */}
      <button
        onClick={() => onToggle(todo._id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          todo.completed
            ? 'bg-green-500 border-green-500'
            : 'border-gray-300 hover:border-blue-500'
        }`}
      >
        {todo.completed && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>

      {/* Todo content - text or edit input */}
      <div className="flex-1 min-w-0">
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full px-3 py-1 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        ) : (
          <span
            className={`block truncate ${
              todo.completed
                ? 'text-gray-400 line-through'
                : 'text-gray-800'
            }`}
          >
            {todo.title}
          </span>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex-shrink-0 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {isEditing ? (
          <>
            {/* Save button */}
            <button
              onClick={handleSave}
              className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors"
              title="Save"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
            {/* Cancel button */}
            <button
              onClick={handleCancel}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
              title="Cancel"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </>
        ) : (
          <>
            {/* Edit button */}
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
              title="Edit"
              disabled={todo.completed}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
            {/* Delete button */}
            <button
              onClick={() => onDelete(todo._id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
              title="Delete"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
