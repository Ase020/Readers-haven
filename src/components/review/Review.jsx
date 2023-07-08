/* eslint-disable react/prop-types */
import "./review.css";

const Review = ({ review }) => {
  return (
    <div className="review">
      <h4 className="review-user">
        <span style={{ textTransform: "capitalize" }}>
          {review.user?.first_name}
        </span>{" "}
        <span className="review-comm">said: </span>
      </h4>
      <p className="review-head">
        Comment: <span className="review-comm">{review.description}</span>
      </p>
      <p className="review-head">
        Rating: <span className="review-rate">{review.star_rating}</span>
      </p>
      <hr />
    </div>
  );
};

export default Review;
