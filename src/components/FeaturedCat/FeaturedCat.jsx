import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './FeaturedCat.css'
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
    <div className="featured-categories-section">
      <h2 className="featured-categories-title">Featured Categories</h2>
      <ul className="category-list">
        {categories.map(cat => (
          <li key={cat}>
            <button className="category-item" onClick={() => handleCategoryClick(cat)}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturedCategories;