// import React from 'react'
import { useContext } from "react";
import "./authors.css";
import { AuthorsContext } from "../../context/authors";
import { AuthorCard } from "../../components";
import { Link } from "react-router-dom";

const Authors = () => {
  const [allAuthors] = useContext(AuthorsContext);

  return (
    <div className="authors_wrapper">
      <h2 className="authors-header">Authors</h2>
      <div className="authors-page">
        {allAuthors?.map((author) => (
          <Link to={`/authors/${author.id}`} key={author.id}>
            <AuthorCard author={author} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Authors;
