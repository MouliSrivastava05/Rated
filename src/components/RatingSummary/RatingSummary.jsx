import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const RatingSummary = ({ rating, totalReviews }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
      <div className="flex items-center mb-4">
        <div className="flex items-center mr-4">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-400 text-2xl" />
          ))}
          {hasHalfStar && <FaStarHalfAlt className="text-yellow-400 text-2xl" />}
          {[...Array(emptyStars)].map((_, i) => (
            <FaStar key={`empty-${i}`} className="text-gray-300 text-2xl" />
          ))}
        </div>
        <span className="text-3xl font-bold">{rating.toFixed(1)}</span>
        <span className="text-gray-500 ml-2">out of 5</span>
      </div>
      <div className="text-gray-600">
        Based on {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}
      </div>
      <div className="mt-4 space-y-2">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center">
            <span className="w-12 text-sm text-gray-600">{star} stars</span>
            <div className="flex-1 h-2 mx-4 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-yellow-400 rounded-full"
                style={{
                  width: `${(rating >= star ? 100 : rating > star - 1 ? (rating - (star - 1)) * 100 : 0)}%`
                }}
              />
            </div>
            <span className="w-12 text-sm text-gray-600 text-right">
              {Math.round((rating >= star ? 100 : rating > star - 1 ? (rating - (star - 1)) * 100 : 0))}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSummary;