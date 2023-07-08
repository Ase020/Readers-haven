/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined, AddOutlined } from "@mui/icons-material";

import "./my-books-container.css";

const NoBook = () => (
  <h1 className="add-book-to-shelf">Add Books for reviews</h1>
);

const MyBooksContainer = ({ user }) => {
  return (
    <div className="my-books-container">
      <div className="my-books-header">
        <h3 className="my-books-header-span">
          My <span> Books</span>
        </h3>
        <Link to="/books/add">
          <AddOutlined
            style={{ fontSize: "28px", color: "#e8880a", cursor: "pointer" }}
          />
        </Link>
      </div>

      <div className="my-books-wrapper">
        {user.books.length > 0 ? (
          user.books.map((book) => (
            <div className="my-book-wrapper" key={book?.id}>
              <Link to={`/books/${book.id}`}>{book?.title}</Link>

              <div className="my-book-btn-wrapper">
                <EditOutlined className="my-book-btn" />
                <DeleteOutlined className="my-book-btn" />
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

export default MyBooksContainer;
