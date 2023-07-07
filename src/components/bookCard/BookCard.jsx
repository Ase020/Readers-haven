/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./book-card.css";

const BookCard = ({
  id,
  title,
  publish_date,
  price,
  image,
  // rating,
  author,
}) => {
  // console.log(author, rating);
  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <h2 className="title">{title}</h2>
      <p>publish_date: {publish_date}</p>
      <p>
        <Link to="/author">Author: {author}</Link>
      </p>
      {/* <p>Rating: {rating}</p> */}

      <p>Price: ${price}</p>
      <button>
        <Link to={`/books/${id}`}>More Information</Link>
      </button>
    </div>
  );
};

export default BookCard;
