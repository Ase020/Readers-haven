// import React from 'react'
import './smallbook.css';

// eslint-disable-next-line react/prop-types
function SmallBook({ title, publish_date, price, image }) {
  return (
    <div className="small-book-card">
      <img className="small-book-img" src={image} alt={title} />
      <div className="card-info">
        <h2 className="title">{title}</h2>
        {/* <p>Author: {author}</p> */}
        <p className="card-info-p">Published in: {publish_date}</p>
        <p className="card-info-p2">Price: ${price}</p>
      </div>
    </div>
  );
}

export default SmallBook;
