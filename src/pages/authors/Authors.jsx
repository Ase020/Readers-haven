// import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./authors.css";

const Authors = () => {
  const [allAuthors, setAllAuthors] = useState([]);

  const getAllAuthors = async () => {
    const res = await fetch(
      "https://peaceful-oasis-68149-c720121aea60.herokuapp.com/authors"
    );
    const data = await res.json();
    setAllAuthors(data);
  };
  useEffect(() => {
    getAllAuthors();
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3000/me", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="authors_wrapper">
      <div className="authors-page">
        <h2 className="authors-header">Books By Authors</h2>
        <ul className="list-authors">
          {allAuthors.map((author) => (
            <li className="single_author" key={author.id}>
              {/* <a href="#">{author.name}</a> */}
              <Link to={`/author/${author.id}`}>{author.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Authors;
