import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProdInfo from "../components/ProdInfo/ProdInfo";
import RatingSummary from "../components/RatingSummary/RatingSummary";
import RatingFilter from "../components/RatingFilter/RatingFilter";
import ReviewForm from "../components/ReviewForm/ReviewForm";
import UserReviewsList from "../components/UserReviewsList/UserReviewsList";
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error('Failed to fetch product');
        const data = await response.json();
        setProduct(data);
        // Initialize with some sample reviews
        setReviews([
          {
            name: "John Doe",
            rating: 5,
            review: "Excellent product! The quality is outstanding and it exceeded my expectations.",
            date: new Date(2024, 2, 15)
          },
          {
            name: "Jane Smith",
            rating: 4,
            review: "Very good product, but shipping took longer than expected.",
            date: new Date(2024, 2, 10)
          }
        ]);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (activeFilter) {
      setFilteredReviews(reviews.filter(review => review.rating === activeFilter));
    } else {
      setFilteredReviews(reviews);
    }
  }, [reviews, activeFilter]);

  const handleReviewSubmit = (review) => {
    const newReview = {
      ...review,
      date: new Date()
    };
    setReviews([newReview, ...reviews]);
  };

  const handleFilter = (rating) => {
    setActiveFilter(rating);
  };

  if (isLoading) {
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
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const averageRating = reviews.length > 0
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    : 0;

  // Calculate review counts per star rating
  const reviewCounts = reviews.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

  return (
    <div className="product-details-container">
      <div className="product-details-grid">
        {/* Left Column - Product Info */}
        <div className="product-info-column">
          {product && <ProdInfo product={product} />}
        </div>

        {/* Right Column - Reviews Section */}
        <div className="reviews-column">
          <RatingSummary rating={averageRating} totalReviews={reviews.length} reviewCounts={reviewCounts} />
          <RatingFilter onFilter={handleFilter} activeFilter={activeFilter} />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <div className="reviews-grid">
          <div className="product-info-column">
            <UserReviewsList reviews={filteredReviews} />
          </div>
          <div>
            <ReviewForm onSubmit={handleReviewSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;