import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './ReviewForm.css';

function ReviewForm({ onSubmit }) {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!review.trim()) newErrors.review = 'Review text is required';
    if (rating === 0) newErrors.rating = 'Please select a rating';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ review, rating, name });
      setReview('');
      setRating(0);
      setName('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form-container">
      <h3 className="review-form-title">Write a Review</h3>
      
      <div className="form-group">
        <label className="form-label">
          Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`form-input ${errors.name ? 'error' : ''}`}
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="error-message">{errors.name}</p>
        )}
      </div>

      <div className="form-group">
        <label className="form-label">
          Rating
        </label>
        <div className="rating-input">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`rating-star ${
                star <= (hover || rating)
                  ? 'filled'
                  : 'empty'
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            />
          ))}
        </div>
        {errors.rating && (
          <p className="error-message">{errors.rating}</p>
        )}
      </div>

      <div className="form-group">
        <label className="form-label">
          Your Review
        </label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className={`form-textarea ${errors.review ? 'error' : ''}`}
          placeholder="Write your review here..."
          rows="4"
        />
        {errors.review && (
          <p className="error-message">{errors.review}</p>
        )}
      </div>

      <button
        type="submit"
        className="submit-button"
      >
        Submit Review
      </button>
    </form>
  );
}

export default ReviewForm;