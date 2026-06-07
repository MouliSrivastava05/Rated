import React, { useEffect, useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCartWishlist } from '../context/CartWishlistContext';
import { getProducts, CATEGORIES } from '../data/products';
import './ProductListing.css';

const CARD_TINTS = ['#FDE8EE', '#DFF0F7', '#FAF7F0', '#FEF3C7', '#FDE8EE', '#FAF7F0', '#DFF0F7'];

const BADGE_TYPES = [
  { cls: 'badge-new',     text: 'New ★' },
  { cls: 'badge-feature', text: 'Pick ✦' },
  { cls: 'badge-hot',     text: 'Hot 🍦' },
  { cls: 'badge-sale',    text: 'Sale' },
];

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const location = useLocation();
  const { addToCart } = useCartWishlist();

  useEffect(() => {
    setProducts(getProducts());
    setLoading(false);
  }, []);

  const params = new URLSearchParams(location.search);
  const urlCategory = params.get('category');

  useEffect(() => {
    setActiveCategory(urlCategory);
  }, [urlCategory]);

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return products;
    return products.filter(p => p.category === activeCategory);
  }, [products, activeCategory]);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    const btn = e.currentTarget;
    btn.classList.add('pressed');
    setTimeout(() => btn.classList.remove('pressed'), 300);
  };

  const handleFilter = (e, cat) => {
    setActiveCategory(cat === activeCategory ? null : cat);
    const btn = e.currentTarget;
    btn.classList.add('filter-pressed');
    setTimeout(() => btn.classList.remove('filter-pressed'), 350);
  };

  if (loading) {
    return <div className="pl-loading"><span>Loading Collection...</span></div>;
  }

  const buildRows = (items) => {
    const rows = [];
    let i = 0;
    let rowIndex = 0;
    while (i < items.length) {
      if (rowIndex % 2 === 0) {
        rows.push({ type: 'A', items: items.slice(i, i + 3) });
        i += 3;
      } else {
        rows.push({ type: 'B', items: items.slice(i, i + 3) });
        i += 3;
      }
      rowIndex++;
    }
    return rows;
  };

  const rows = buildRows(filteredProducts);

  return (
    <div className="pl-page">
      <div className="pl-header">
        <h1 className="pl-title">The Collection</h1>
      </div>

      <div className="pl-filters">
        <button
          className={`pl-filter-btn ${!activeCategory ? 'active' : ''}`}
          onClick={(e) => handleFilter(e, null)}
        >
          All
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`pl-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={(e) => handleFilter(e, cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="pl-rows">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className={`pl-row pl-row-${row.type}`}>
            {row.items.map((product, itemIdx) => {
              const tint  = CARD_TINTS[(rowIdx * 3 + itemIdx) % CARD_TINTS.length];
              const badge = BADGE_TYPES[(rowIdx * 3 + itemIdx) % BADGE_TYPES.length];
              const isLarge = row.type === 'A' && itemIdx === 0;

              return (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className={`pl-card ${isLarge ? 'pl-card-large' : 'pl-card-small'}`}
                >
                  {/* Badge — absolutely positioned, never shifts layout */}
                  <span className={`pl-badge badge-sticker ${badge.cls}`}>{badge.text}</span>

                  {/* Image zone — colored background lives HERE only */}
                  <div className="pl-card-image-wrap" style={{ background: tint }}>
                    <img src={product.image} alt={product.title} className="pl-card-image" />
                    <button
                      className="na-quick-add"
                      onClick={(e) => handleQuickAdd(e, product)}
                    >
                      + Add to Bag
                    </button>
                  </div>

                  {/* Info strip — always cream, always 80px */}
                  <div className="pl-card-info">
                    <p className="pl-card-title">{product.title}</p>
                    <p className="pl-card-price">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
