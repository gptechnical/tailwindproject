import React from "react";

const Home = () => {
  return (
    <div className="relative group inline-block">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Hover Me
      </button>
      <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 3</a>
      </div>
    </div>
  );
};

export default Home;
