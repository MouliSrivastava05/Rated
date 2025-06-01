import React from 'react';
import { FaStar } from 'react-icons/fa';
import './UserReviewsList.css';

function UserReviewsList({ reviews }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="user-reviews-list-container">
      <h3 className="user-reviews-list-title">Customer Reviews</h3>
      {reviews.length === 0 ? (
        <div className="empty-reviews-message-container">
          <p className="empty-reviews-message">No reviews yet. Be the first to review!</p>
        </div>
      ) : (
        reviews.map((review, idx) => (
          <div
            key={idx}
            className="review-item"
          >
            <div className="review-header">
              <div className="reviewer-info">
                <div className="reviewer-avatar">
                  {review.name ? review.name[0].toUpperCase() : 'A'}
                </div>
                <div className="reviewer-details">
                  <p className="reviewer-name">{review.name || 'Anonymous'}</p>
                  <p className="review-date">
                    {formatDate(review.date || new Date())}
                  </p>
                </div>
              </div>
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`star-icon ${
                      i < review.rating ? '' : 'empty'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="review-text">{review.review}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default UserReviewsList;