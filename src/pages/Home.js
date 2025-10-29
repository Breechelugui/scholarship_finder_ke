import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">ScholarFinder KE</h1>
      <p className="text-lg mb-6">Find scholarships across Kenyan universities</p>
      <Link to="/browse" className="bg-blue-500 text-white px-6 py-2 rounded inline-block">
        Browse Scholarships
      </Link>
    </div>
  );
}

export default Home;