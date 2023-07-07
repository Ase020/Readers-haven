import "./add-book.css";

const AddBook = () => {
  return (
    <div className="add_book-container">
      <div className="add_book-wrapper">
        <h1 className="add_book-header">Add a Book for a review</h1>
        <form className="add_book-form">
          <input
            type="text"
            placeholder="Title"
            className="add_book-form-input"
          />
          <input
            type="text"
            placeholder="Genre"
            className="add_book-form-input"
          />
          <input
            type="number"
            placeholder="Price"
            className="add_book-form-input"
          />
          <input
            type="text"
            placeholder="Poster url"
            className="add_book-form-input"
          />
          <input
            type="number"
            placeholder="Author_id"
            className="add_book-form-input"
          />
          <input
            type="number"
            placeholder="Publisher_id"
            className="add_book-form-input"
          />
          <input
            type="number"
            placeholder="User_id"
            className="add_book-form-input"
          />

          <button type="submit" className="add_book-form-btn">
            Add book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
