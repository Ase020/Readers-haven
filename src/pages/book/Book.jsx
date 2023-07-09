import { useEffect, useState } from "react";
import "./book.css";
import { useParams } from "react-router-dom";
import { AddReview, BookDetails, Review } from "../../components";

const Book = () => {
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://peaceful-oasis-68149-c720121aea60.herokuapp.com/books/${id}`).then((res) => {
      if (res.ok) {
        res.json().then(setBook);
      }
    });
  }, [id]);

  useEffect(() => {
    fetch(`https://peaceful-oasis-68149-c720121aea60.herokuapp.com/books/${id}/reviews`).then((res) => {
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
            <Review
              key={review.id}
              review={review}
              setReviews={setReviews}
              reviews={reviews}
            />
          ))}
        </div>

        <AddReview reviews={reviews} setReviews={setReviews} />
      </div>
    </div>
  );
};

export default Book;
