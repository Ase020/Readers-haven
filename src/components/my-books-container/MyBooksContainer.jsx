import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@mui/icons-material";

import "./my-books-container.css";

const MyBooksContainer = () => {
  return (
    <div className="my-books-container">
      <h3 className="my-books-header">
        <span className="my-books-header-span">My </span>Books
      </h3>

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
