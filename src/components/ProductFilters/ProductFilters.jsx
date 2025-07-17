import React from 'react';
import { FaFilter, FaTimes } from 'react-icons/fa';
import './ProductFilters.css';

const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  priceRange,
  onPriceRangeChange,
  onClearFilters
}) => {
  return (
    <div className="filters-container">
      <div className="filters-header">
        <FaFilter className="filter-icon" />
        <h2 className="filters-title">Filters</h2>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Categories</h3>
        <div className="category-list">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Price Range</h3>
        <div className="price-range-inputs">
          <div className="price-input-group">
            <label htmlFor="minPrice" className="price-label">Min</label>
            <input
              type="number"
              id="minPrice"
              value={priceRange.min}
              onChange={(e) => onPriceRangeChange({ ...priceRange, min: e.target.value })}
              placeholder="0"
              className="price-input"
            />
          </div>
          <div className="price-input-group">
            <label htmlFor="maxPrice" className="price-label">Max</label>
            <input
              type="number"
              id="maxPrice"
              value={priceRange.max}
              onChange={(e) => onPriceRangeChange({ ...priceRange, max: e.target.value })}
              placeholder="1000"
              className="price-input"
            />
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="sort-select"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <button onClick={onClearFilters} className="clear-filters-button">
        <FaTimes className="clear-icon" />
        Clear All Filters
      </button>
    </div>
  );
};

export default ProductFilters; 