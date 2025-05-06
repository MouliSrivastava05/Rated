import React from "react";

const RatingSummary = ({ rating }) => (
  <div className="rating-summary">
    <h3>Average Rating</h3>
    <p>{rating} / 5</p>
  </div>
);

export default RatingSummary;