import React from 'react';
import { Link } from 'react-router-dom';
import { useCartWishlist } from '../../context/CartWishlistContext';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { cartItems, likedItems } = useCartWishlist();

  return (
    <nav className="navbar">
      <div className="nav-logo"><Link to="/">Rated</Link></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="nav-icon-link">
          <Link to="/cart">
            <FaShoppingCart className="nav-icon" />
            {cartItems.length > 0 && <span className="nav-counter">{cartItems.length}</span>}
          </Link>
        </li>
        <li className="nav-icon-link">
          <Link to="/wishlist">
            <FaHeart className="nav-icon" />
            {likedItems.length > 0 && <span className="nav-counter">{likedItems.length}</span>}
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;