import "./booklist.css";

import { books } from "../../constants";
import BookCard from "../bookCard/BookCard";

const BookList = () => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard
          id={book.id}
          key={book.id}
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