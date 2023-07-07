/* eslint-disable react/prop-types */
import "./book-details.css";

const BookDetails = ({ book }) => {
  return (
    <div className="book-wrapper">
      <img className="book-img" src={book?.poster_url} alt={book?.title} />
      <div className="book-details">
        <h2>Book Details</h2>
        <p>
          Title: <span className="book-user">{book?.title}</span>
        </p>
        <p>
          Genre: <span className="book-user">{book?.genre}</span>
        </p>
        <p>
          Author: <span className="book-user">{book?.author.name}</span>
        </p>
        <p>
          Publisher: <span className="book-user">{book?.publisher?.name}</span>
        </p>
        <p>
          Price: <span className="book-user">${book?.price}</span>
        </p>
        <p>
          Description: <span className="book-user">{book?.description}</span>
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
