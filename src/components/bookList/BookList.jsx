import "./booklist.css";

import { books } from "../../constants";
import BookCard from "../bookCard/BookCard";

const BookList = () => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard
          key={index}
          author={book.author}
          title={book.title}
          rating={book.rating}
          price={book.price}
          image={book.image}
        />
      ))}
      {books.map((book, index) => (
        <BookCard
          key={index}
          author={book.author}
          title={book.title}
          rating={book.rating}
          price={book.price}
          image={book.image}
        />
      ))}
      {books.map((book, index) => (
        <BookCard
          key={index}
          author={book.author}
          title={book.title}
          rating={book.rating}
          price={book.price}
          image={book.image}
        />
      ))}
    </div>
  );
};

export default BookList;
