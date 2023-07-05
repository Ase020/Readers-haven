// import React from 'react'
import "./book-card.css";

// eslint-disable-next-line react/prop-types
function Small({ author, title, rating, price, image }) {
  return (
    <div className="small-book-card">
      <img className="small-book-img" src={image} alt={title} />
      <h2 className="title">{title}</h2>
      <p>Author: {author}</p>
      <p>Rating: {rating}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default Small;
