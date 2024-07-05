import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimelineDisplay = ({ timeline }) => {
  return (
    <div className="mt-8">
      <VerticalTimeline>
        {timeline.timeline.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.timestamp}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentStyle={{ background: '#fbfafa', borderTop: '5px solid rgb(33, 150, 243)'}}
            contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)'}}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold text-black">{event.title}</h3>
            <h4 className="text-gray-500">{event.timestamp}</h4>
            <p className="text-gray-600">{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default TimelineDisplay;
