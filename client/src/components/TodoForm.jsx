import { useState } from 'react';

/**
 * TodoForm Component
 * Handles adding new todos with an input field and submit button
 */
function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate input
    if (!inputValue.trim()) {
      return;
    }

    setIsSubmitting(true);
    
    // Call parent add function
    const success = await onAdd(inputValue.trim());
    
    // Clear input on success
    if (success) {
      setInputValue('');
    }
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting || !inputValue.trim()}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
        >
          {isSubmitting ? 'Adding...' : 'Add'}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
