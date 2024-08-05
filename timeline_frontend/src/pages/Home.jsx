import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto mt-4 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold text-center">Welcome to the Timeline App</h1>
      <p className="mt-4 text-xl text-center">Generate timelines based on your prompts.</p>
      <Link to="/timeline" className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg text-xl">
        Access Timeline Interface
      </Link>
    </div>
  );
}

export default Home;
