import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';
import ProductFilters from '../components/ProductFilters/ProductFilters';
import SearchBar from '../components/SearchBar/SearchBar';
import Pagination from '../components/Pagination/Pagination';
import './ProductListing.css';

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [searchTerm, setSearchTerm] = useState('');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // Get unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    return uniqueCategories;
  }, [products]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower)
      );
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Apply price range filter
    if (priceRange.min !== '') {
      result = result.filter(product => product.price >= Number(priceRange.min));
    }
    if (priceRange.max !== '') {
      result = result.filter(product => product.price <= Number(priceRange.max));
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // featured - no sorting needed
        break;
    }

    return result;
  }, [products, selectedCategory, sortBy, priceRange, searchTerm]);

  // Get current page items
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedProducts, currentPage, itemsPerPage]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortBy, priceRange, searchTerm, itemsPerPage]);

  const handleClearFilters = () => {
    setSelectedCategory('');
    setSortBy('featured');
    setPriceRange({ min: '', max: '' });
    setSearchTerm('');
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h2 className="error-title">Error</h2>
          <p className="error-message">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-listing-container">
      <div className="product-listing-header">
        <h1 className="product-listing-title">Our Products</h1>
        <p className="product-listing-subtitle">Discover our collection of high-quality products</p>
      </div>

      <div className="product-listing-grid">
        {/* Filters Sidebar */}
        <div className="filters-sidebar">
          <div className="search-container">
            <SearchBar onSearch={setSearchTerm} products={products} />
          </div>
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            onClearFilters={handleClearFilters}
          />
        </div>

        {/* Products Grid */}
        <div className="products-grid-container">
          <div className="products-count">
            <p className="products-count-text">
              Showing {filteredAndSortedProducts.length} products
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          <div className="products-grid">
            {currentItems.map(product => (
              <div
                key={product.id}
                className="product-card"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                  <div className={`product-actions ${hoveredProduct === product.id ? 'visible' : ''}`}>
                    <button className="action-button">
                      <FaHeart className="action-icon" />
                    </button>
                    <button className="action-button">
                      <FaShoppingCart className="action-icon" />
                    </button>
                  </div>
                </div>

                <div className="product-info">
                  <h2 className="product-title">
                    {product.title}
                  </h2>
                  
                  <div className="product-rating">
                    <div className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`star ${i < Math.round(product.rating?.rate || 0) ? 'filled' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="rating-count">
                      ({product.rating?.count || 0})
                    </span>
                  </div>

                  <div className="product-footer">
                    <span className="product-price">
                      ${product.price.toFixed(2)}
                    </span>
                    <Link
                      to={`/products/${product.id}`}
                      className="view-details-button"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 ? (
            <div className="no-products">
              <p className="no-products-text">No products found matching your criteria.</p>
              <button
                onClick={handleClearFilters}
                className="clear-filters-button"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <Pagination
              currentPage={currentPage}
              totalItems={filteredAndSortedProducts.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
              onItemsPerPageChange={setItemsPerPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;