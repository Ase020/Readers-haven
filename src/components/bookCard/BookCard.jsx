/* eslint-disable react/prop-types */
import "./book-card.css";

const BookCard = ({ author, title, rating, price, image }) => (
  <div className="book-card">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>Author: {author}</p>
    <p>Rating: {rating}</p>
    <p>Price: ${price}</p>
    <button>More Information</button>
  </div>
);

export default BookCard;
