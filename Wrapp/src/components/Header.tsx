import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">FARFETCH</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/shopping/men" className="hover:underline">Men</Link></li>
            <li><Link to="/shopping/women" className="hover:underline">Women</Link></li>
            <li><Link to="/shopping/kids" className="hover:underline">Kids</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6 cursor-pointer" />
          <User className="w-6 h-6 cursor-pointer" />
          <ShoppingBag className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;