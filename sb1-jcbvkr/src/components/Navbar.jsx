import React from 'react';
import { ShoppingCart, Heart, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const navItemStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem',
  color: 'inherit',
  fontSize: '1rem',
  fontWeight: '500',
  textDecoration: 'none',
};

const badgeStyle = {
  position: 'absolute',
  top: '-0.5rem',
  right: '-0.5rem',
  backgroundColor: 'red',
  color: 'white',
  borderRadius: '50%',
  padding: '0.25rem',
  fontSize: '0.75rem',
  minWidth: '1.25rem',
  textAlign: 'center',
};

export default function Navbar({ cart = [], user = null, logout = () => {} }) {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/shop?category=${category}`);
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e5e5e5',
        zIndex: 50,
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem',
        }}>
          {/* Logo and Categories */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/" style={{ ...navItemStyle, fontSize: '1.5rem', fontWeight: 'bold', marginRight: '2rem' }}>
              Wrapp.
            </a>
            <button onClick={() => handleCategoryClick('men')} style={navItemStyle}>
              Men
            </button>
            <button onClick={() => handleCategoryClick('women')} style={navItemStyle}>
              Women
            </button>
            <button onClick={() => handleCategoryClick('kids')} style={navItemStyle}>
              Kids
            </button>
          </div>

          {/* Navigation Items */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* <a href="/shop" style={navItemStyle}>
              Shop
            </a> */}
            <a href="/cart" style={{ ...navItemStyle, position: 'relative' }}>
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <span style={badgeStyle}>
                  {cart.length}
                </span>
              )}
            </a>
            <a href="/wishlist" style={navItemStyle}>
              <Heart size={24} />
            </a>
            {user ? (
              <button onClick={logout} style={navItemStyle}>
                <User size={24} />
              </button>
            ) : (
              <a href="/login" style={navItemStyle}>
                <User size={24} />
              </a>
            )}
          </div>
        </div>
      </nav>
      <div style={{ height: '4rem' }} /> {/* Spacer to prevent content from being hidden behind the navbar */}
    </>
  );
}