import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaTag } from 'react-icons/fa';
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
    <section className="featured-categories-circles">
      <h2 className="featured-categories-title-modern">Featured Categories</h2>
      <div className="category-circles-row">
        {categories.map(cat => (
          <div key={cat} className="category-circle-card" onClick={() => handleCategoryClick(cat)}>
            <div className="category-circle-icon"><FaTag /></div>
            <div className="category-circle-name">{cat.charAt(0).toUpperCase() + cat.slice(1)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCategories;