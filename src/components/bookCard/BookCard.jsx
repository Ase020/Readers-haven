/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom';
import './book-card.css';

const BookCard = ({ title, publish_date, price, image }) => (
  <div className="book-card">
    <img src={image} alt={title} />
    <h2 className="title">{title}</h2>
<<<<<<< HEAD
    {/* <p>
      <Link to="/author">Author: {author}</Link>
    </p> */}
    <p>publish_date: {publish_date}</p>
=======
    <p>
      <Link to="/author">Author: {author}</Link>
    </p>
    <p>Rating: {rating}</p>
>>>>>>> main
    <p>Price: ${price}</p>
    <button>More Information</button>
  </div>
);

export default BookCard;
