import React, { useState } from 'react';
import TimelinePrompt from '../components/TimelinePrompt';
import TimelineDisplay from '../components/TimelineDisplay';

const Timeline = () => {
  const [timeline, setTimeline] = useState(null);

  const fetchTimeline = async (prompt) => {
    try {
      const response = await fetch(`http://localhost:8000/get_timeline?user_prompt=${encodeURIComponent(prompt)}`);
      const data = await response.json();
      setTimeline(data);
    } catch (error) {
      console.error('Error fetching timeline:', error);
    }
  }

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold">Generate Timeline</h1>
      <TimelinePrompt onPromptSubmit={fetchTimeline} />
      {timeline && <TimelineDisplay timeline={timeline} />}
    </div>
  );
}

export default Timeline;
