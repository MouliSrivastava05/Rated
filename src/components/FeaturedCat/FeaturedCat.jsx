import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaTshirt, FaLaptop, FaGem, FaCouch, FaBoxOpen } from 'react-icons/fa';
import './FeaturedCat.css'

const categoryIcons = {
  "men's clothing": <FaTshirt />, // Example icon
  "women's clothing": <FaTshirt />,
  "electronics": <FaLaptop />,
  "jewelery": <FaGem />,
  "home": <FaCouch />,
  "default": <FaBoxOpen />
};

function FeaturedCategories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <section className="featured-categories-section">
      <div className="featured-categories-header">
        <h2 className="featured-categories-title">Featured Categories</h2>
        <p className="featured-categories-subtitle">Browse by category and discover your favorites</p>
      </div>
      <ul className="category-list">
        {categories.map(cat => (
          <li key={cat}>
            <button className="category-item" onClick={() => handleCategoryClick(cat)}>
              <span className="category-icon">
                {categoryIcons[cat] || categoryIcons["default"]}
              </span>
              <span className="category-label">
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FeaturedCategories;