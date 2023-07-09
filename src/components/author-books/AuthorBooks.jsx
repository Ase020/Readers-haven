/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./author-books.css";
import { AddOutlined } from "@mui/icons-material";

const NoBook = () => (
  <h1 className="add-book-to-shelf">Add Books for reviews</h1>
);

const AuthorBooks = ({ books }) => {
  return (
    <div className="author-books-container">
      <div className="author-books-header">
        <h3 className="author-books-header-span">
          Authored <span> Books</span>
        </h3>
        <Link to="/books/add">
          <AddOutlined
            style={{ fontSize: "28px", color: "#e8880a", cursor: "pointer" }}
          />
        </Link>
      </div>

      <div className="author-books-wrapper">
        {books?.length > 0 ? (
          books?.map((book) => (
            <div className="author-book-wrapper" key={book?.id}>
              <Link to={`/books/${book.id}`}>{book?.title}</Link>

              <div className="author-book-btn-wrapper">
                Genre: &nbsp;<span>{book.genre}</span>
              </div>
            </div>
          ))
        ) : (
          <NoBook />
        )}
      </div>
    </div>
  );
};

export default AuthorBooks;
