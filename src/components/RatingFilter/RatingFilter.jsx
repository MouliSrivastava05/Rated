import React from "react";

const RatingFilter = ({ onFilter }) => (
  <div className="rating-filter">
    <h4>Filter by Rating</h4>
    {[5, 4, 3, 2, 1].map(r => (
      <button key={r} onClick={() => onFilter(r)}>{r} Stars</button>
    ))}
  </div>
);

export default RatingFilter;