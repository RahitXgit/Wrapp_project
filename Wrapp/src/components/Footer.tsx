import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:underline">Contact us</Link></li>
              <li><Link to="/orders" className="hover:underline">Orders & delivery</Link></li>
              <li><Link to="/returns" className="hover:underline">Returns & refunds</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About FARFETCH</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:underline">About us</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/press" className="hover:underline">Press</Link></li>
              <li><Link to="/sustainability" className="hover:underline">Sustainability</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:underline">Terms & conditions</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy policy</Link></li>
              <li><Link to="/cookies" className="hover:underline">Cookie policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 FARFETCH Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;