/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./book-card.css";

const BookCard = ({ author, title, rating, price, image }) => (
  <div className="book-card">
    <img src={image} alt={title} />
    <h2 className="title">{title}</h2>
    <p><Link to="/author">Author: {author}</Link></p>
    <p>Rating: {rating}</p>
    <p>Price: ${price}</p>
    <button>More Information</button>
  </div> 
);

export default BookCard;
