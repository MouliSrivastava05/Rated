import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartWishlist } from '../../context/CartWishlistContext';
import { useAuth } from '../../context/AuthContext';
import { FaShoppingCart, FaHeart, FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { cartItems, likedItems } = useCartWishlist();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      closeMenu();
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>Rated</Link>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li className="nav-icon-link">
          <Link to="/cart" onClick={closeMenu}>
            <FaShoppingCart className="nav-icon" />
            {cartItems.length > 0 && <span className="nav-counter">{cartItems.length}</span>}
          </Link>
        </li>
        <li className="nav-icon-link">
          <Link to="/wishlist" onClick={closeMenu}>
            <FaHeart className="nav-icon" />
            {likedItems.length > 0 && <span className="nav-counter">{likedItems.length}</span>}
          </Link>
        </li>
        {user ? (
          <>
            <li className="nav-user">
              <FaUser className="nav-icon" />
              <span>{user.email}</span>
            </li>
            <li>
              <button onClick={handleLogout} className="nav-logout">
                <FaSignOutAlt className="nav-icon" />
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" className="nav-login" onClick={closeMenu}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
