// import React from 'react'
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./authors.css";
import { AuthorsContext } from "../../context/authors";

const Authors = () => {
  const [allAuthors] = useContext(AuthorsContext);

  return (
    <div className="authors_wrapper">
      <h2 className="authors-header">Authors</h2>
      <div className="authors-page">
        <ul className="list-authors">
          {allAuthors.map((author) => (
            <li className="single_author" key={author.id}>
              <Link to={`/authors/${author.id}`}>{author.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Authors;
