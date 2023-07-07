import { useEffect, useState } from "react";
import "./book.css";
import { useParams } from "react-router-dom";

const Book = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`).then((res) => {
      if (res.ok) {
        res.json().then(setBook);
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
      <div className="book-wrapper">
        <img className="book-img" src={book?.poster_url} alt={book?.title} />
        <div className="book-details">
          <h2>Book Details</h2>
          <p>
            Title: <span className="review-user">{book?.title}</span>
          </p>
          <p>
            Genre: <span className="review-user">{book?.genre}</span>
          </p>
          <p>
            Author: <span className="review-user">{book?.author.name}</span>
          </p>
          <p>
            Publisher:{" "}
            <span className="review-user">{book?.publisher?.name}</span>
          </p>
          <p>
            Price: <span className="review-user">${book?.price}</span>
          </p>
          <p>
            Description:{" "}
            <span className="review-user">{book?.description}</span>
          </p>
        </div>
      </div>

      <div className="reviews-container">
        <div className="reviews-wrapper">
          <h3>Reviews</h3>
          {book?.reviews.map((review) => (
            <div className="review" key={review.id}>
              {/* <p className="review-head">
                Username: <span className="review-user">Mohamed</span>
              </p> */}
              <p className="review-head">
                Comment:{" "}
                <span className="review-comm">{review.description}</span>
              </p>
              <p className="review-head">
                Rating:{" "}
                <span className="review-rate">{review.star_rating}</span>
              </p>
              <hr />
            </div>
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
