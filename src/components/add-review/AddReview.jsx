/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./add-review.css";
import { UserContext } from "../../context/user";
import { useNavigate, useParams } from "react-router-dom";

const AddReview = ({ reviews, setReviews }) => {
  const [user] = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewObj = {
      book_id: parseInt(id),
      user_id: user.id,
      description: e.target[0].value,
      star_rating: parseInt(e.target[1].value),
    };

    console.log("ReviewObj: ", reviewObj);

    fetch(`http://localhost:3000/books/${id}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewObj),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 422) {
          throw new Error("Unprocessable Entity");
        } else {
          throw new Error("Unknown Error");
        }
      })
      .then((data) => {
        // reviews.push(data);
        setReviews([...reviews, data]);

        console.log(data);
      })
      .catch((error) => {
        if (error.message === "Unprocessable Entity") {
          navigate("/login");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <form className="add-review-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="Add a review"
        className="add-review-input"
        cols="20"
        rows="4"
      ></textarea>

      <select name="Rating" id="Rating">
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

      <button type="submit" className="review-btn">
        Submit
      </button>
    </form>
  );
};

export default AddReview;
