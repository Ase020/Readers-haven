/* eslint-disable react/prop-types */
import "./book-details.css";

const BookDetails = ({ book }) => {
  return (
    <div className="book-wrapper">
      <img className="book-img" src={book?.poster_url} alt={book?.title} />
      <div className="book-details">
        <h2>Book Details</h2>
        <p className="book-details-header">
          Title: <span className="book-user">{book?.title}</span>
        </p>
        <p className="book-details-header">
          Genre: <span className="book-user">{book?.genre}</span>
        </p>
        <p className="book-details-header">
          Author: <span className="book-user">{book?.author?.name}</span>
        </p>
        <p className="book-details-header">
          Publisher: <span className="book-user">{book?.publisher?.name}</span>
        </p>
        <p className="book-details-header">
          Price: <span className="book-user">${book?.price}</span>
        </p>
        <p className="book-details-header">
          Description: <span className="book-user">{book?.description}.</span>
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
