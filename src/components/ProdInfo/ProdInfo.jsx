import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useCartWishlist } from '../../context/CartWishlistContext';
import './ProdInfo.css';

function ProdInfo({ product }) {
  const { addToCart, toggleLike, isLiked } = useCartWishlist();

  if (!product) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="prod-info-container">
      <div className="prod-info-grid">
        <div className="prod-image-section">
          <div className="prod-image-container">
            <img
              src={product.image}
              alt={product.title}
              className="prod-image"
            />
          </div>
        </div>
        
        <div className="prod-details-section">
          <div>
            <h1 className="prod-title">
              {product.title}
            </h1>
            <p className="prod-category">
              {product.category}
            </p>
          </div>

          <div className="prod-price-container">
            <span className="prod-price">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="prod-original-price">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="prod-description">
            {product.description}
          </p>

          <div className="prod-actions">
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
              <FaShoppingCart />
              <span>Add to Cart</span>
            </button>
            <button className="wishlist-button" onClick={() => toggleLike(product)}>
              <FaHeart className={`wishlist-icon${isLiked(product.id) ? ' liked' : ''}`} />
            </button>
          </div>

          <div className="prod-details-section">
            <h3 className="prod-details-title">Product Details</h3>
            <ul className="prod-details-list">
              <li>• Free shipping on orders over $50</li>
              <li>• 30-day return policy</li>
              <li>• Secure payment processing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdInfo;