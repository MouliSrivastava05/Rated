import React, { useEffect, useState } from "react";
import './FeaturedCat.css'
function FeaturedCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div className="featured-categories">
      <h2>Featured Categories</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturedCategories;