import React, { useState } from 'react';
import TimelinePrompt from '../components/TimelinePrompt';
import TimelineDisplay from '../components/TimelineDisplay';
import config from '../config';  // Import the configuration

const Timeline = () => {
  const [timeline, setTimeline] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');

  const fetchTimeline = async (prompt) => {
    setLoading(true);
    try {
      const response = await fetch(`${config.apiBaseUrl}/get_timeline?user_prompt=${encodeURIComponent(prompt)}`);
      const data = await response.json();
      setTimeline(data);
    } catch (error) {
      console.error('Error fetching timeline:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleExampleClick = (examplePrompt) => {
    setPrompt(examplePrompt);
    fetchTimeline(examplePrompt);
  }

  return (
    <div className="container mx-auto mt-8 px-4 max-w-4xl">
      <h1 className="text-5xl font-bold text-left text-blue-600 mb-4">Universal Timeline Generator</h1>
      <p className="text-xl text-left text-gray-700 mb-8">
        Enter any topic, and this tool will generate a detailed timeline for you. Whether it's historical events, recipes, or personal biographies, get a clear and structured timeline instantly.
      </p>
      <div className="flex justify-end mb-8">
        <TimelinePrompt onPromptSubmit={fetchTimeline} initialPrompt={prompt} loading={loading} />
      </div>
      <div className="text-left text-gray-600 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Examples of Prompts:</h2>
        <div className="space-y-2">
          <button
            className={`w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-lg transition-colors duration-200 ${loading ? 'bg-gray-300 cursor-not-allowed' : 'hover:bg-blue-500 hover:text-white'}`}
            onClick={() => handleExampleClick('Show me a timeline of French history')}
            disabled={loading}
          >
            Show me a timeline of French history
          </button>
          <button
            className={`w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-lg transition-colors duration-200 ${loading ? 'bg-gray-300 cursor-not-allowed' : 'hover:bg-blue-500 hover:text-white'}`}
            onClick={() => handleExampleClick('Show me a timeline of an apple pie recipe')}
            disabled={loading}
          >
            Show me a timeline of an apple pie recipe
          </button>
          <button
            className={`w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-lg transition-colors duration-200 ${loading ? 'bg-gray-300 cursor-not-allowed' : 'hover:bg-blue-500 hover:text-white'}`}
            onClick={() => handleExampleClick('Show me a timeline of Napoleon Bonaparte\'s life')}
            disabled={loading}
          >
            Show me a timeline of Napoleon Bonaparte's life
          </button>
        </div>
      </div>
      {loading && <div className="loader mb-8 text-xl font-bold animate-bounce text-slate-400">Loading timeline...</div>}
      {timeline && <TimelineDisplay timeline={timeline} />}
    </div>
  );
}

export default Timeline;
