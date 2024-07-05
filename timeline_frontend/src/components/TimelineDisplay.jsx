import React from 'react';

const TimelineDisplay = ({ timeline }) => {
  return (
    <div className="mt-4">
      {timeline.timeline.map((event, index) => (
        <div key={index} className="p-4 border-b border-gray-300">
          <h3 className="text-xl font-bold">{event.title}</h3>
          <p className="text-gray-600">{event.timestamp}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TimelineDisplay;
