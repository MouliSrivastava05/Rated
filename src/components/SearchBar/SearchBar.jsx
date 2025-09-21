import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = ({ onSearch, products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        const filteredProducts = products
          .filter(product => 
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .slice(0, 5);
        setSuggestions(filteredProducts);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, products]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSuggestionClick = (product) => {
    setSearchTerm(product.title);
    onSearch(product.title);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="search-container" ref={searchRef}>
      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search products..."
          className="search-input"
        />
        {searchTerm && (
          <button onClick={clearSearch} className="clear-button">
            <FaTimes />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="suggestions-container">
          {suggestions.map(product => (
            <div
              key={product.id}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(product)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="suggestion-image"
                loading="lazy"
                decoding="async"
              />
              <div className="suggestion-info">
                <h3 className="suggestion-title">{product.title}</h3>
                <p className="suggestion-category">{product.category}</p>
                <p className="suggestion-price">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {showSuggestions && searchTerm && suggestions.length === 0 && (
        <div className="no-results">
          No products found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default SearchBar; 