import React, { useState } from 'react';
import { ShoppingCart, Heart, User } from 'lucide-react';

const buttonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem',
  color: 'inherit',
};

const iconLinkStyle = {
  color: 'inherit',
  textDecoration: 'none',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderNavItems = (isMobile = false) => (
    <>
      <a href="/shop" style={iconLinkStyle}>
        Shop
      </a>
      <a href="/cart" style={iconLinkStyle}>
        <ShoppingCart size={24} />
        {cart.length > 0 && (
          <span style={badgeStyle}>
            {cart.length}
          </span>
        )}
      </a>
      <a href="/wishlist" style={iconLinkStyle}>
        <Heart size={24} />
      </a>
      {user ? (
        <button onClick={logout} style={buttonStyle}>
          {isMobile ? 'Logout' : <User size={24} />}
        </button>
      ) : (
        <a href="/login" style={iconLinkStyle}>
          <User size={24} />
        </a>
      )}
    </>
  );

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
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '4rem',
          }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Wrapp.</span>
            </a>

            {/* Desktop Navigation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {renderNavItems()}
            </div>

            {/* Mobile menu button */}
            <button
              style={{ ...buttonStyle, display: 'none', '@media (max-width: 768px)': { display: 'flex' } }}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={{ '@media (min-width: 768px)': { display: 'none' } }}>
            <div style={{ padding: '0.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {renderNavItems(true)}
            </div>
          </div>
        )}
      </nav>
      <div style={{ height: '4rem' }} /> {/* Spacer to prevent content from being hidden behind the navbar */}
    </>
  );
}