import React, { useState } from 'react';

const TimelinePrompt = ({ onPromptSubmit }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      onPromptSubmit(prompt);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-4">
      <input 
        type="text" 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
        className="p-2 border border-gray-400 rounded" 
        placeholder="Enter your timeline prompt" 
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">Get Timeline</button>
    </form>
  );
}

export default TimelinePrompt;
