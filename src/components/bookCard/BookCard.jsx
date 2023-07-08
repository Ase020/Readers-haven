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
      <img src={image} alt={title} className="book-cover" />
      <div className="book-attrs">
        <h2 className="book-title">
          Title: <span className="book-attr">{title}</span>
        </h2>
        <p className="book-attr">
          Published: <span className="book-attr">{publish_date}</span>
        </p>
        <p className="book-attr">
          <Link to={`/authors/${author?.id}`}>
            Author: <span className="book-attr author-click">{author}</span>
          </Link>
        </p>
        <p className="book-attr">
          Price: $<span className="book-attr">{price}</span>
        </p>
        <button className="showmore-btn">
          <Link to={`/books/${id}`}>More</Link>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
