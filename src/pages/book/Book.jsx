import { useEffect, useState } from "react";
import "./book.css";
import { useParams } from "react-router-dom";
import { AddReview, BookDetails, Review } from "../../components";

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

        <AddReview />
      </div>
    </div>
  );
};

export default Book;
