import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartWishlist } from '../../context/CartWishlistContext';
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { cartItems, likedItems } = useCartWishlist();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
        <li>
          <Link to="/login" className="nav-login" onClick={closeMenu}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
