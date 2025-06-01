import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import './RatingSummary.css';

const RatingSummary = ({ rating, totalReviews, reviewCounts }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="rating-summary-container">
      <h3 className="rating-summary-title">Customer Reviews</h3>
      <div className="rating-overview">
        <div className="stars-container">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={`full-${i}`} className="star star-filled" />
          ))}
          {hasHalfStar && <FaStarHalfAlt className="star star-filled" />}
          {[...Array(emptyStars)].map((_, i) => (
            <FaStar key={`empty-${i}`} className="star star-empty" />
          ))}
        </div>
        <span className="rating-value">{rating.toFixed(1)}</span>
        <span className="rating-max">out of 5</span>
      </div>
      <div className="rating-count">
        Based on {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}
      </div>
      <div className="rating-bars">
        {[5, 4, 3, 2, 1].map((star) => {
          const starCount = reviewCounts[star] || 0;
          const percentage = totalReviews > 0 ? (starCount / totalReviews) * 100 : 0;
          return (
            <div key={star} className="rating-bar-row">
              <span className="star-label">{star} stars</span>
              <div className="rating-bar-container">
                <div
                  className="rating-bar"
                  style={{
                    width: `${percentage}%`
                  }}
                />
              </div>
              <span className="rating-count-text">
                {starCount}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingSummary;