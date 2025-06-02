import React, { useEffect, useState } from "react";
import './TopRatedProducts.css'
function TopRatedProducts() {
  const [products, setProducts] = useState([]);

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
      <h2 className="top-rated-title">Top Rated Products</h2>
      <div className="top-rated-grid">
        {products.map(product => (
          <div key={product.id} className="top-rated-card">
            <img src={product.image} alt={product.title} />
            <div className="top-rated-card-info">
              <h3 className="top-rated-card-title">{product.title}</h3>
              <p className="top-rated-card-price">${product.price.toFixed(2)}</p>
              <p className="top-rated-card-rating">⭐ {product.rating?.rate} ({product.rating?.count} reviews)</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopRatedProducts;