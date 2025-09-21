import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaRegHeart, FaEye } from 'react-icons/fa';
import { useCartWishlist } from '../../context/CartWishlistContext';
import './TopRatedProducts.css'

function TopRatedProducts() {
  const [products, setProducts] = useState([]);
  const { addToCart, toggleLike, isLiked } = useCartWishlist();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        const topRated = data.filter(p => p.rating?.rate >= 4);
        setProducts(topRated.slice(0, 4));
      });
  }, []);

  return (
    <section className="top-rated-section">
      <div className="top-rated-header">
        <h2 className="top-rated-title">Top Rated Products</h2>
        <a href="/products?sort=top-rated" className="top-rated-viewall">View All</a>
      </div>
      <div className="top-rated-grid">
        {products.map((product, idx) => (
          <article key={product.id} className={`top-rated-card animate-fadein`} style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}>
            <span className="top-rated-badge">Top Rated</span>
            <img src={product.image} alt={product.title} loading="lazy" decoding="async" />
            <div className="top-rated-card-info">
              <h3 className="top-rated-card-title">{product.title}</h3>
              <p className="top-rated-card-price">${product.price.toFixed(2)}</p>
              <p className="top-rated-card-rating">★ {product.rating?.rate} ({product.rating?.count} reviews)</p>
              <div className="top-rated-card-actions">
                <Link to={`/products/${product.id}`} className="card-action-btn view-details-btn" title="View Details">
                  <FaEye />
                </Link>
                <button className="card-action-btn add-to-cart-btn" onClick={() => addToCart(product)} title="Add to Cart">
                  <FaShoppingCart />
                </button>
                <button className="card-action-btn wishlist-btn" onClick={() => toggleLike(product)} title="Add to Wishlist">
                  {isLiked(product.id) ? <FaHeart className="wishlist-icon liked" /> : <FaRegHeart className="wishlist-icon" />}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TopRatedProducts;