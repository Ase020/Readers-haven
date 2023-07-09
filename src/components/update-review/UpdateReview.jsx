/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./update-review.css";
import { UserContext } from "../../context/user";
import { useNavigate } from "react-router-dom";

const UpdateReview = ({ review, setUpdateOn, reviews, setReviews }) => {
  const [desc, setDesc] = useState(review.description);
  const [rating, setRating] = useState(review.star_rating);
  const [user] = useContext(UserContext);
  const navigate = useNavigate();

  const handleEdit = (e) => {
    if (!user) {
      navigate("/login");
    }

    e.preventDefault();

    const reviewObj = {
      description: desc,
      star_rating: parseInt(rating),
    };

    if (user.id === review.user_id) {
      confirm("Edit your review");
      fetch(
        `https://peaceful-oasis-68149-c720121aea60.herokuapp.com/books/${review.book_id}/reviews/${review.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewObj),
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            alert("Update failed");
          }
        })
        .then((updatedReview) => {
          const updatedReviews = reviews.map((r) =>
            r.id === updatedReview.id ? updatedReview : r
          );
          setReviews(updatedReviews);

          console.log("Review updated successfully!");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Update failed. Please try again.");
        });
    } else {
      alert("You can only edit your review!");
    }

    console.log(reviewObj);
    setUpdateOn(false);
  };
  return (
    <form className="review-update-wrapper">
      <textarea
        cols="30"
        rows="3"
        className="review-update-input"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>

      <select
        className="review-update-input"
        name="Rating"
        id="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <button type="submit" className="review-update-btn" onClick={handleEdit}>
        Update
      </button>
    </form>
  );
};

export default UpdateReview;
