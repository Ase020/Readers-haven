// import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './authors.css';

const Authors = () => {
  const [allAuthors, setAllAuthors] = useState([]);
  const getAllAuthors = async () => {
    const res = await fetch(
      'https://peaceful-oasis-68149-c720121aea60.herokuapp.com/authors'
    );
    const data = await res.json();
    setAllAuthors(data);
  };
  useEffect(() => {
    getAllAuthors();
  }, []);
  // console.log(allAuthors);

  return (
    <div className="authors_wrapper">
      <div className="authors-page">
        <h2 className="authors-header">Books By Authors</h2>
        <ul className="list-authors">
          {allAuthors.map((author) => (
            <li className="single_author" key={author.id}>
              {/* <a href="#">{author.name}</a> */}
              <Link to="/author/:id">
                {author.name} <span className="author-span">({author.id})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Authors;
