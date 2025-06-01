import React from 'react';
import { useCartWishlist } from '../context/CartWishlistContext';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Wishlist.css';

function Wishlist() {
  const { likedItems, toggleLike, addToCart } = useCartWishlist();

  return (
    <div className="wishlist-container">
      <h1 className="wishlist-title">Your Wishlist</h1>
      {
        likedItems.length === 0 ? (
          <p className="empty-wishlist-message">Your wishlist is empty.</p>
        ) : (
          <div className="wishlist-items-list">
            {likedItems.map(item => (
              <div key={item.id} className="wishlist-item">
                <Link to={`/products/${item.id}`} className="wishlist-item-link">
                  <img src={item.image} alt={item.title} className="wishlist-item-image" />
                  <div className="wishlist-item-details">
                    <h2 className="wishlist-item-title">{item.title}</h2>
                    <p className="wishlist-item-price">${item.price.toFixed(2)}</p>
                  </div>
                </Link>
                <div className="wishlist-item-actions">
                  <button onClick={() => addToCart(item)} className="add-to-cart-button">
                    <FaShoppingCart /> Add to Cart
                  </button>
                  <button onClick={() => toggleLike(item)} className="remove-button">
                    <FaHeart /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
}

export default Wishlist; 