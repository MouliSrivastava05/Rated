import React, { useEffect, useState } from 'react';
import './NewArrivals.css';

function NewArrivals() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        // Sort by ID in descending order to get newest (assuming higher ID means newer)
        const newestProducts = data.sort((a, b) => b.id - a.id);
        // Take the first few, e.g., 4
        setProducts(newestProducts.slice(0, 4));
      });
  }, []);

  return (
    <section className="new-arrivals-section">
      <h2 className="new-arrivals-title">New Arrivals</h2>
      <div className="new-arrivals-grid">
        {products.map(product => (
          <div key={product.id} className="new-arrivals-card">
            <img src={product.image} alt={product.title} />
            <div className="new-arrivals-card-info">
              <h3 className="new-arrivals-card-title">{product.title}</h3>
              <p className="new-arrivals-card-price">${product.price.toFixed(2)}</p>
              {/* Optionally add rating/review count here if desired */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals; 