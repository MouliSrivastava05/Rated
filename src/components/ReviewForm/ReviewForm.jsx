import React, { useState } from 'react';

function ReviewForm({ onSubmit }) {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ review, rating });
    setReview('');
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write a review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
        {[5, 4, 3, 2, 1].map(num => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;