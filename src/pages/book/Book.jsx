import React from 'react';
import './book.css'

const Book = () => {
  return (
    <div className='book'>
        <h2>Book Details</h2>
        <p>Author: Mohamed Salad</p>
        <p>Publisher: Moringa</p>
        <p>Genre:</p>
        <p>Price:</p>
        <p>Description:</p>
        <img src="" alt="" />


        <div className='reviews'>
            <h3>Reviews</h3>
            <div>
                <p>Author:</p>
                <p>Rating:</p>
                <p>Comment:</p>
            </div>
        </div>
    </div>
  )
}

export default Book
