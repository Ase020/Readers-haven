import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./add-book.css";
import { UserContext } from "../../context/user";
import { BooksContext } from "../../context/books";
import { AuthorsContext } from "../../context/authors";
import { PublishersContext } from "../../context/publishers";

const AddBook = () => {
  const [loading, setLoading] = useState(false);
  const [user] = useContext(UserContext);
  const [allBook, setAllBook] = useContext(BooksContext);
  const [authors] = useContext(AuthorsContext);
  const [publishers] = useContext(PublishersContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    confirm("Add book?");
    setLoading(true);
    const bookObj = {
      title: e.target[0].value,
      genre: e.target[1].value,
      price: e.target[2].value,
      publish_date: e.target[3].value,
      poster_url: e.target[4].value,
      author_id: e.target[5].value,
      publisher_id: e.target[6].value,
      description: e.target[7].value,
      user_id: user?.id,
    };

    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((book) => {
            setAllBook([book, ...allBook]);
            setLoading(false);
            navigate("/");
          });
        } else {
          navigate("/login");
          throw new Error("Book not saved!");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Login to add a book!");
        setLoading(false);
        navigate("/login");
      });

    navigate("/");
  };

  return (
    <div className="add_book-container">
      <div className="add_book-wrapper">
        <h1 className="add_book-header">Add a Book for a review</h1>
        <form className="add_book-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="add_book-form-input"
            required
          />
          <input
            type="text"
            placeholder="Genre"
            className="add_book-form-input"
            required
          />
          <input
            type="number"
            placeholder="Price"
            className="add_book-form-input"
            required
            min="1"
            step="1"
          />
          <input
            type="number"
            placeholder="Publish year"
            min="1900"
            step="1"
            className="add_book-form-input"
            required
          />
          <input
            type="text"
            placeholder="Poster url"
            className="add_book-form-input"
            required
          />

          <select className="add_book-form-input">
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
          <select className="add_book-form-input">
            {publishers.map((publisher) => (
              <option key={publisher.id} value={publisher.id}>
                {publisher.name}
              </option>
            ))}
          </select>

          <textarea
            className="add_book-form-input textarea"
            required
            placeholder="Description"
            cols="24"
            rows="5"
          ></textarea>

          <button type="submit" className="add_book-form-btn">
            {loading ? "Adding book" : "Add book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
