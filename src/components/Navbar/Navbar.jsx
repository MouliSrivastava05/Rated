import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartWishlist } from '../../context/CartWishlistContext';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { cartItems, setIsCartOpen } = useCartWishlist();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      closeMenu();
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Left nav links */}
      <ul className="nav-left">
        <li><Link to="/products" className="nav-link" onClick={closeMenu}>Collection</Link></li>
        <li><Link to="/about" className="nav-link" onClick={closeMenu}>About</Link></li>
        <li><Link to="/wishlist" className="nav-link" onClick={closeMenu}>Saved</Link></li>
      </ul>

      {/* Center logo */}
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>Rated</Link>
      </div>

      {/* Right icons */}
      <div className="nav-right">
        {user ? (
          <button className="nav-link nav-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login" className="nav-link" onClick={closeMenu}>Login</Link>
        )}

        <button
          id="nav-cart-btn"
          className="nav-cart-btn"
          onClick={() => { setIsCartOpen(true); closeMenu(); }}
          aria-label={`Cart, ${cartCount} items`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </button>

        {/* Mobile hamburger */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/products" onClick={closeMenu}>Collection</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/wishlist" onClick={closeMenu}>Saved</Link></li>
          {user ? (
            <li><button onClick={handleLogout}>Logout</button></li>
          ) : (
            <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          )}
          <li>
            <button onClick={() => { setIsCartOpen(true); closeMenu(); }}>
              Bag ({cartCount})
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
