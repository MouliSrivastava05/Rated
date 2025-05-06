import React from 'react';

function UserReviewsList({ reviews }) {
  return (
    <div>
      <h3>User Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((r, idx) => (
          <div key={idx}>
            <p>{r.review}</p>
            <p>Rating: {r.rating} ⭐</p>
          </div>
        ))
      )}
    </div>
  );
}

export default UserReviewsList;