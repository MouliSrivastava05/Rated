import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './TopRatedProducts.css';
import '../NewArrivals/NewArrivals.css'; // Import shared editorial layout classes

function TopRatedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        const topRated = data.filter(p => p.rating?.rate >= 4);
        setProducts(topRated.slice(0, 3));
      });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-enter-active');
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      document.querySelectorAll('.top-rated-row').forEach((el) => observer.observe(el));
    }, 500);

    return () => observer.disconnect();
  }, []);

  if (products.length < 3) return null;

  return (
    <section className="editorial-section">
      <div className="editorial-header fade-up fade-up-enter">
        <h2 className="font-serif text-lg">Top Rated</h2>
        <Link to="/products?sort=top-rated" className="font-sans text-label link-underline">See All</Link>
      </div>

      <div className="editorial-container">
        {/* Row 1: Medium Left, Text Right */}
        <div className="editorial-row layout-left top-rated-row fade-up fade-up-enter">
          <Link to={`/products/${products[0].id}`} className="editorial-image-wrapper size-medium">
            <img src={products[0].image} alt={products[0].title} className="editorial-image" loading="lazy" />
          </Link>
          <div className="editorial-info">
            <Link to={`/products/${products[0].id}`}>
              <h3 className="font-serif text-md product-title-hover">{products[0].title}</h3>
            </Link>
            <p className="font-sans text-sm">${products[0].price.toFixed(2)}</p>
            <p className="font-sans text-xs">★ {products[0].rating?.rate}</p>
          </div>
        </div>

        {/* Row 2: Text Left, Large Right */}
        <div className="editorial-row layout-right top-rated-row fade-up fade-up-enter">
          <div className="editorial-info align-right">
            <Link to={`/products/${products[1].id}`}>
              <h3 className="font-serif text-md product-title-hover">{products[1].title}</h3>
            </Link>
            <p className="font-sans text-sm">${products[1].price.toFixed(2)}</p>
            <p className="font-sans text-xs">★ {products[1].rating?.rate}</p>
          </div>
          <Link to={`/products/${products[1].id}`} className="editorial-image-wrapper size-large">
            <img src={products[1].image} alt={products[1].title} className="editorial-image" loading="lazy" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TopRatedProducts;