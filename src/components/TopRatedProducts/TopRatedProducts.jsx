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
    <section className="top-rated">
      <h2>Top Rated Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>₹{product.price}</p>
            <p>⭐ {product.rating?.rate} ({product.rating?.count} reviews)</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopRatedProducts;