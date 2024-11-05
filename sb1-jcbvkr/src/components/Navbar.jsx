import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">Wrapp.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-gray-700 hover:text-gray-900">Shop</Link>
            <div className="relative">
              <Link to="/cart" className="text-gray-700 hover:text-gray-900">
                <ShoppingCart className="h-6 w-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
            <Link to="/wishlist" className="text-gray-700 hover:text-gray-900">
              <Heart className="h-6 w-6" />
            </Link>
            {user ? (
              <button
                onClick={logout}
                className="text-gray-700 hover:text-gray-900"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-gray-900">
                <User className="h-6 w-6" />
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/shop"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Shop
            </Link>
            <Link
              to="/cart"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Cart ({cart.length})
            </Link>
            <Link
              to="/wishlist"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Wishlist
            </Link>
            {user ? (
              <button
                onClick={logout}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;