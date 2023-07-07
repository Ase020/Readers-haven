import { useEffect, useState } from "react";
import "./book.css";
import { useParams } from "react-router-dom";
import { BookDetails, Review } from "../../components";

const Book = () => {
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`).then((res) => {
      if (res.ok) {
        res.json().then(setBook);
      }
    });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}/reviews`).then((res) => {
      if (res.ok) {
        res.json().then(setReviews);
      }
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewObj = {
      description: e.target[0].value,
      star_rating: e.target[1].value,
    };

    console.log("ReviewObj: ", reviewObj);
  };
  return (
    <div className="book">
      <BookDetails book={book} />

      <div className="reviews-container">
        <div className="reviews-wrapper">
          <h3>Reviews</h3>
          {reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>

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
      </div>
    </div>
  );
};

export default Book;
