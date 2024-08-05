import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto mt-4 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold text-center">About Us</h1>
      <p className="mt-4 text-xl text-left max-w-3xl">
        Welcome to the Timeline App! Our application allows users to generate historical timelines based on their prompts.
        We leverage the Groq API for free LLM (Large Language Model) inference to process your prompts and return a detailed JSON
        representation of the timeline. This timeline data is then displayed using a robust timeline library in React, offering an
        interactive and visually appealing way to explore historical events.
      </p>
      <p className="mt-4 text-xl text-left max-w-3xl">
        The process is simple:
        <ol className="list-decimal list-inside mt-2">
          <li>Enter your prompt detailing the events or period you are interested in.</li>
          <li>We send this prompt to the Groq API, which utilizes its advanced language model to infer and generate a comprehensive timeline.</li>
          <li>The API returns a JSON object containing the timeline data.</li>
          <li>Our application then uses this data to render an interactive timeline using a powerful React timeline library.</li>
        </ol>
      </p>
      <p className="mt-4 text-xl text-left max-w-3xl">
        This seamless integration provides a user-friendly interface to explore and visualize historical events, making it easier
        to understand and learn from the past.
      </p>
    </div>
  );
}

export default About;
