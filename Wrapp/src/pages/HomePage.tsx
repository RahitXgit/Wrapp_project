import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to FARFETCH</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/shopping/men" className="relative group">
          <img src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Men's Fashion" className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-2xl font-semibold">Shop Men</span>
          </div>
        </Link>
        <Link to="/shopping/women" className="relative group">
          <img src="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Women's Fashion" className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-2xl font-semibold">Shop Women</span>
          </div>
        </Link>
        <Link to="/shopping/kids" className="relative group">
          <img src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Kids' Fashion" className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-2xl font-semibold">Shop Kids</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;