import React, { useState, useEffect, useRef } from 'react';
import { ClipLoader } from 'react-spinners';

const TimelinePrompt = ({ onPromptSubmit, initialPrompt, loading }) => {
  const [prompt, setPrompt] = useState(initialPrompt || '');
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      onPromptSubmit(prompt);
    }
  }

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      handleSubmit(e);
    }
  }

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [prompt]);

  useEffect(() => {
    setPrompt(initialPrompt);
  }, [initialPrompt]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
      <div className="flex flex-col items-center space-y-1">
        <div className="flex items-start space-x-4">
          <textarea 
            ref={textareaRef}
            value={prompt} 
            onChange={(e) => setPrompt(e.target.value)} 
            onKeyDown={handleKeyDown}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-96 resize-none overflow-hidden" 
            placeholder="Enter your timeline prompt"
            rows="1"
            style={{ minHeight: '3rem' }}
            disabled={loading}
          />
          <button 
            type="submit" 
            className={`p-3 bg-blue-600 text-white rounded-lg shadow transition duration-300 ${loading ? 'bg-gray-300 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            style={{ height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            disabled={loading}
          >
            {loading ? <ClipLoader size={24} color="#ffffff" /> : 'Get Timeline'}
          </button>
        </div>
        <p className="italic text-sm text-gray-500 text-center">tip: press ctrl+enter to send prompt</p>
      </div>
    </form>
  );
}

export default TimelinePrompt;
