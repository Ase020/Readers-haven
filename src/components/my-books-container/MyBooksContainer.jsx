import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined, AddOutlined } from "@mui/icons-material";

import "./my-books-container.css";

const MyBooksContainer = () => {
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
        <div className="my-book-wrapper">
          <Link to={"/"}>Moringa Syllabus</Link>

          <div className="my-book-btn-wrapper">
            <EditOutlined className="my-book-btn" />
            <DeleteOutlined className="my-book-btn" />
          </div>
        </div>

        <div className="my-book-wrapper">
          <Link to={"/"}>Moringa Syllabus</Link>

          <div className="my-book-btn-wrapper">
            <EditOutlined className="my-book-btn" />
            <DeleteOutlined className="my-book-btn" />
          </div>
        </div>

        <div className="my-book-wrapper">
          <Link to={"/"}>Moringa Syllabus</Link>

          <div className="my-book-btn-wrapper">
            <EditOutlined className="my-book-btn" />
            <DeleteOutlined className="my-book-btn" />
          </div>
        </div>
        <div className="my-book-wrapper">
          <Link to={"/"}>Moringa Syllabus</Link>

          <div className="my-book-btn-wrapper">
            <EditOutlined className="my-book-btn" />
            <DeleteOutlined className="my-book-btn" />
          </div>
        </div>
        <div className="my-book-wrapper">
          <Link to={"/"}>Moringa Syllabus</Link>

          <div className="my-book-btn-wrapper">
            <EditOutlined className="my-book-btn" />
            <DeleteOutlined className="my-book-btn" />
          </div>
        </div>
        <div className="my-book-wrapper">
          <Link to={"/"}>Moringa Syllabus</Link>

          <div className="my-book-btn-wrapper">
            <EditOutlined className="my-book-btn" />
            <DeleteOutlined className="my-book-btn" />
          </div>
        </div>
        <div className="my-book-wrapper">
          <Link to={"/"}>Moringa Syllabus</Link>

          <div className="my-book-btn-wrapper">
            <EditOutlined className="my-book-btn" />
            <DeleteOutlined className="my-book-btn" />
          </div>
        </div>
        <div className="my-book-wrapper">
          <Link to={"/"}>Moringa Syllabus</Link>

          <div className="my-book-btn-wrapper">
            <EditOutlined className="my-book-btn" />
            <DeleteOutlined className="my-book-btn" />
          </div>
        </div>
        <div className="my-book-wrapper">
          <Link to={"/"}>Moringa Syllabus</Link>

          <div className="my-book-btn-wrapper">
            <EditOutlined className="my-book-btn" />
            <DeleteOutlined className="my-book-btn" />
          </div>
        </div>
        <div className="my-book-wrapper">
          <Link to={"/"}>Moringa Syllabus</Link>

          <div className="my-book-btn-wrapper">
            <EditOutlined className="my-book-btn" />
            <DeleteOutlined className="my-book-btn" />
          </div>
        </div>
        <div className="my-book-wrapper">
          <Link to={"/"}>Moringa Syllabus</Link>

          <div className="my-book-btn-wrapper">
            <EditOutlined className="my-book-btn" />
            <DeleteOutlined className="my-book-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooksContainer;
