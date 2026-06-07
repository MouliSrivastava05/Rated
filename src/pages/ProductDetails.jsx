import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCartWishlist } from "../context/CartWishlistContext";
import { getProductById, getProducts } from "../data/products";
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);

  const { addToCart, toggleLike, isLiked } = useCartWishlist();

  useEffect(() => {
    const found = getProductById(id);
    setProduct(found);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    if (!isLoading && product) {
      const el = document.querySelector('.pdp-info-sticky');
      if (el) el.classList.add('fade-up-enter-active');
    }
  }, [isLoading, product]);

  if (isLoading || !product) {
    return <div className="pdp-loading">Loading...</div>;
  }

  // Related products: same category, exclude current
  const related = getProducts(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="pdp-container">
      <div className="pdp-split">
        <div className="pdp-images-column">
          <div className="pdp-image-wrapper">
            <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="pdp-image-wrapper">
            <img src={product.image} alt={`${product.title} detail`} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.1)' }} />
          </div>
        </div>

        <div className="pdp-info-column">
          <div className="pdp-info-sticky fade-up">
            <div className="pdp-breadcrumbs font-sans text-label">
              <span style={{ textTransform: 'capitalize' }}>{product.category}</span>
            </div>

            <h1 className="pdp-title">{product.title}</h1>
            <p className="pdp-price font-sans text-md">${product.price.toFixed(2)}</p>

            {/* Rating */}
            <div className="pdp-rating">
              {'★'.repeat(Math.round(product.rating?.rate || 0))}{'☆'.repeat(5 - Math.round(product.rating?.rate || 0))}
              <span className="pdp-rating-count"> ({product.rating?.count} reviews)</span>
            </div>

            <div className="pdp-description font-sans text-sm">
              <p>{product.description}</p>
            </div>

            <div className="pdp-accordion">
              <button
                className="accordion-toggle font-sans text-sm"
                onClick={() => setSizeGuideOpen(!sizeGuideOpen)}
              >
                <span>Size & Fit</span>
                <span className="accordion-icon">{sizeGuideOpen ? '−' : '+'}</span>
              </button>
              {sizeGuideOpen && (
                <div className="accordion-content font-sans text-sm">
                  <p>Fits true to size. Take your normal size.</p>
                  <p>Model is 188cm/6&apos;2&quot; and wears a size M.</p>
                </div>
              )}
            </div>

            <div className="pdp-actions">
              <button className="pdp-add-to-cart font-sans text-sm btn-primary" onClick={() => addToCart(product)}>
                Add to Bag
              </button>
              <button
                className={`pdp-wishlist font-sans text-sm ${isLiked(product.id) ? 'liked' : ''}`}
                onClick={() => toggleLike(product)}
              >
                {isLiked(product.id) ? '♥ Saved' : '♡ Save'}
              </button>
            </div>

            <div className="pdp-accordion pdp-reviews">
              <button
                className="accordion-toggle font-sans text-sm"
                onClick={() => setReviewsOpen(!reviewsOpen)}
              >
                <span>Reviews ({product.rating?.count || 0})</span>
                <span className="accordion-icon">{reviewsOpen ? '−' : '+'}</span>
              </button>
              {reviewsOpen && (
                <div className="accordion-content font-sans text-sm">
                  <p>{product.rating?.rate} out of 5 — based on {product.rating?.count} reviews.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="pdp-related">
          <h2 className="pdp-related-title">You Might Also Like</h2>
          <div className="pdp-related-grid">
            {related.map(p => (
              <a key={p.id} href={`/products/${p.id}`} className="pdp-related-card">
                <div className="pdp-related-img-wrap">
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="pdp-related-info">
                  <p className="pdp-related-name">{p.title}</p>
                  <p className="pdp-related-price">${p.price.toFixed(2)}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
