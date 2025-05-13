import React from 'react';

const Home = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="text-center p-6 bg-white rounded-xl shadow-xl max-w-xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Website</h1>
        <p className="text-gray-700 text-lg">
          This is a simple React home page built using Tailwind CSS. Feel free to explore the site and check out the projects!
        </p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Home;
