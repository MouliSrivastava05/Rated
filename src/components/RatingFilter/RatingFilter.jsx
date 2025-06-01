import React from "react";
import { FaStar } from "react-icons/fa";
import './RatingFilter.css';

const RatingFilter = ({ onFilter, activeFilter }) => {
  const handleFilterClick = (rating) => {
    onFilter(rating === activeFilter ? null : rating);
  };

  return (
    <div className="rating-filter-container">
      <h4 className="rating-filter-title">Filter by Rating</h4>
      <div className="rating-filter-list">
        {[5, 4, 3, 2, 1].map((rating) => (
          <button
            key={rating}
            onClick={() => handleFilterClick(rating)}
            className={`rating-filter-button ${activeFilter === rating ? 'active' : ''}`}
          >
            <div className="stars-container">
              {[...Array(rating)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`star ${activeFilter === rating ? 'active' : 'inactive'}`}
                />
              ))}
            </div>
            <span className="rating-label">
              {rating} {rating === 1 ? "Star" : "Stars"}
            </span>
          </button>
        ))}
        {activeFilter && (
          <button
            onClick={() => onFilter(null)}
            className="clear-filter-button"
          >
            Clear Filter
          </button>
        )}
      </div>
    </div>
  );
};

export default RatingFilter;