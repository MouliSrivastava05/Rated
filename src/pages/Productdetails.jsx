import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProdInfo from "../components/ProdInfo/ProdInfo";
import RatingSummary from "../components/RatingSummary/RatingSummary";
import RatingFilter from "../components/RatingFilter/RatingFilter";
import ReviewForm from "../components/ReviewForm/ReviewForm";
import UserReviewsList from "../components/UserReviewsList/UserReviewsList";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="product-details-container">
      {product && (
        <>
          <ProdInfo product={product} />
          <RatingSummary rating={product.rating?.rate} />
          <RatingFilter onFilter={() => {}} />
          <UserReviewsList reviews={reviews} />
          <ReviewForm onSubmit={handleReviewSubmit} />
        </>
      )}
    </div>
  );
};

export default ProductDetails;