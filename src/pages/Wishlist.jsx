import React from 'react';
import { useCartWishlist } from '../context/CartWishlistContext';
import { Link } from 'react-router-dom';
import EditorialImage from '../components/EditorialImage/EditorialImage';
import './Wishlist.css';

function Wishlist() {
  const { likedItems, toggleLike, addToCart } = useCartWishlist();

  return (
    <div className="wishlist-page">
      <header className="wishlist-header">
        <h1 className="text-hero">Saved</h1>
      </header>

      {likedItems.length === 0 ? (
        <p className="wishlist-empty">Nothing saved yet. Go find something 🍦</p>
      ) : (
        <div className="wishlist-list">
          {likedItems.map((item, i) => (
            <div key={item.id} className={`wishlist-row ${i % 2 === 0 ? 'layout-left' : 'layout-right'}`}>
              <Link to={`/products/${item.id}`} className="wishlist-image editorial-image-wrapper size-small">
                <EditorialImage src={item.image} alt={item.title} />
              </Link>
              <div className="wishlist-info editorial-info">
                <Link to={`/products/${item.id}`}>
                  <h2 className="font-serif product-title-hover">{item.title}</h2>
                </Link>
                <p className="font-sans text-sm">${item.price.toFixed(2)}</p>
                <div className="wishlist-actions">
                  <button onClick={() => addToCart(item)} className="wishlist-add btn-primary">
                    Add to Cart
                  </button>
                  <button onClick={() => toggleLike(item)} className="wishlist-remove">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
