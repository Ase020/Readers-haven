/* eslint-disable react/prop-types */
import "./review.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useContext, useState } from "react";
import { UserContext } from "../../context/user";

const Review = ({ review, setReviews, reviews }) => {
  const [btnHovered, setBtnHovered] = useState(null);
  const [updateOn, setUpdateOn] = useState(false);
  const [user] = useContext(UserContext);

  const handleEdit = (e) => {
    e.preventDefault();
  };

  const handleDelete = () => {
    confirm("Delete your review");
    if (user.id === review.user_id) {
      fetch(
        `http://localhost:3000/books/${review.book_id}/reviews/${review.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            const updatedReviews = reviews.filter((r) => r.id !== review.id);
            setReviews(updatedReviews);

            alert("Review deleted successfully!");
          } else {
            alert("Review deletion failed!");
          }
        })
        .catch((err) => console.log("Error:", err));
    } else {
      alert("You can only delete your review!");
    }
  };

  const handleMouseEnter = (btn) => {
    setBtnHovered(btn);
  };

  const handleMouseLeave = () => {
    setBtnHovered(null);
  };

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
        Rating:{" "}
        <span
          className="review-rate"
          style={
            review.star_rating <= 5 ? { color: "red" } : { color: "green" }
          }
        >
          {review.star_rating}
        </span>
      </p>

      {updateOn && (
        <form className="review-update-wrapper">
          <textarea
            cols="30"
            rows="3"
            className="review-update-input"
          ></textarea>

          <select className="review-update-input">
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

          <button
            type="submit"
            className="review-update-btn"
            onClick={handleEdit}
          >
            Update
          </button>
        </form>
      )}

      <div className="btn-wrapper">
        <button
          className="reviews-btn review-edit"
          onClick={() => setUpdateOn((prev) => !prev)}
          onMouseEnter={() => handleMouseEnter("edit")}
          onMouseLeave={handleMouseLeave}
        >
          <EditOutlinedIcon style={{ fontSize: "small" }} />
          <span
            className="review-btn-name"
            style={
              btnHovered === "edit"
                ? { display: "inline-flex" }
                : { display: "none" }
            }
          >
            Edit
          </span>
        </button>

        <button
          className="reviews-btn review-delete"
          onClick={handleDelete}
          onMouseEnter={() => handleMouseEnter("delete")}
          onMouseLeave={handleMouseLeave}
        >
          <DeleteOutlinedIcon style={{ fontSize: "small" }} />
          <span
            className="review-btn-name"
            style={
              btnHovered === "delete"
                ? { display: "flex" }
                : { display: "none" }
            }
          >
            Delete
          </span>
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Review;
