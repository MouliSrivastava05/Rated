import React from 'react';
import { FaStar } from 'react-icons/fa';

function UserReviewsList({ reviews }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
      {reviews.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No reviews yet. Be the first to review!</p>
        </div>
      ) : (
        reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                  {review.name ? review.name[0].toUpperCase() : 'A'}
                </div>
                <div className="ml-3">
                  <p className="font-semibold">{review.name || 'Anonymous'}</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(review.date || new Date())}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700 whitespace-pre-wrap">{review.review}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default UserReviewsList;