import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Write a Review</h3>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Rating
        </label>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`text-2xl cursor-pointer ${
                star <= (hover || rating)
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            />
          ))}
        </div>
        {errors.rating && (
          <p className="text-red-500 text-xs mt-1">{errors.rating}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Your Review
        </label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.review ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Write your review here..."
          rows="4"
        />
        {errors.review && (
          <p className="text-red-500 text-xs mt-1">{errors.review}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Submit Review
      </button>
    </form>
  );
}

export default ReviewForm;