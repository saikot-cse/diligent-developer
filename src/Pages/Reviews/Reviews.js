import React, { useEffect, useState } from "react";
import Review from "./Review/Review";
import "../Services/Services.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div id="reviews">
      <h1 className="text-warning text-center my-5">Top Reviews</h1>
      <div className="service-container container mb-5">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
