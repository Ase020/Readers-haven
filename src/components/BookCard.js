import React, { useState, useEffect } from 'react';

const BookCard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('our api endpoint');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log('Error fetching books:', error);
    }
  };

  return (
    <div className="bookstore">
      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <img src={book.image} alt={book.title} />
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Price: {book.price}</p>
          <p>Ratings: {book.ratings}</p>
          <p>Description: {book.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
