import { useState } from "react";
import "./add-book.css";

const AddBook = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const bookObj = {
      title: e.target[0].value,
      genre: e.target[1].value,
      price: e.target[2].value,
      publish_date: e.target[3].value,
      poster_url: e.target[4].value,
      author_id: e.target[5].value,
      publisher_id: e.target[6].value,
      user_id: e.target[7].value,
      description: e.target[8].value,
    };

    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((book) => {
        console.log(book);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
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
          <input
            type="number"
            placeholder="Author_id"
            className="add_book-form-input"
            required
            min="1"
            step="1"
          />
          <input
            type="number"
            placeholder="Publisher_id"
            className="add_book-form-input"
            required
            min="1"
            step="1"
          />
          <input
            type="number"
            placeholder="User_id"
            className="add_book-form-input"
            required
            min="1"
            step="1"
          />

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
