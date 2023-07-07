/* eslint-disable react/prop-types */
import './booklist.css';

// import { books } from '../../constants';
import BookCard from '../bookCard/BookCard';

// eslint-disable-next-line react/prop-types
const BookList = ({ allBook }) => {
  return (
    <div className="book-list">
      {allBook?.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          author={book.author?.name}
          title={book.title}
          publish_date={book.publish_date}
          price={book.price}
          image={book.poster_url}
        />
      ))}
    </div>
  );
};

export default BookList;
