/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";

import { EditOutlined, DeleteOutlined, AddOutlined } from "@mui/icons-material";

import "./my-books-container.css";
import { BooksContext } from "../../context/books";

const NoBook = () => (
  <h1 className="add-book-to-shelf">Add Books for reviews</h1>
);

const MyBooksContainer = ({ user, setUser }) => {
  const [allBook, setAllBook] = useContext(BooksContext);

  const handleDelete = (book_id) => {
    confirm("Delete book?");
    fetch(
      `https://peaceful-oasis-68149-c720121aea60.herokuapp.com/books/${book_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          alert("Book deleted successfully!");

          // to remove the book from my books page
          setUser((prevUser) => ({
            ...prevUser,
            books: prevUser.books.filter((book) => book.id !== book_id),
          }));
          sessionStorage.setItem(
            "user",
            JSON.stringify({
              ...user,
              books: user.books.filter((book) => book.id !== book_id),
            })
          );

          // to remove the book from the homepage
          setAllBook(allBook.filter((book) => book.id !== book_id));
        } else {
          alert("Book deletion failed💀");
        }
      })
      .catch((err) => console.log(err));
  };

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
                <DeleteOutlined
                  className="my-book-btn"
                  onClick={() => handleDelete(book.id)}
                />
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
