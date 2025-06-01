import React from "react";
import { FaStar } from "react-icons/fa";

const RatingFilter = ({ onFilter, activeFilter }) => {
  const handleFilterClick = (rating) => {
    onFilter(rating === activeFilter ? null : rating);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold mb-4">Filter by Rating</h4>
      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((rating) => (
          <button
            key={rating}
            onClick={() => handleFilterClick(rating)}
            className={`w-full flex items-center p-2 rounded-md transition-colors ${
              activeFilter === rating
                ? "bg-yellow-50 text-yellow-600"
                : "hover:bg-gray-50 text-gray-700"
            }`}
          >
            <div className="flex items-center">
              {[...Array(rating)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    activeFilter === rating ? "text-yellow-400" : "text-gray-300"
                  } mr-1`}
                />
              ))}
            </div>
            <span className="ml-2">
              {rating} {rating === 1 ? "Star" : "Stars"}
            </span>
          </button>
        ))}
        {activeFilter && (
          <button
            onClick={() => onFilter(null)}
            className="w-full text-sm text-gray-500 hover:text-gray-700 mt-2"
          >
            Clear Filter
          </button>
        )}
      </div>
    </div>
  );
};

export default RatingFilter;