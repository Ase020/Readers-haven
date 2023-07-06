// import React from 'react'
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
// import Small from '../../components/smallcard/Small';
import './search.css';
// eslint-disable-next-line react/prop-types
function Search({ allBook = [] }) {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  console.log(allBook);

  const filterBooks = useCallback(() => {
    if (!searchTerm) return;
    setFilteredBooks(
      allBook.filter((book) => book.title.toLowerCase().includes(searchTerm))
    );
  }, [allBook, searchTerm]);

  useEffect(() => {
    filterBooks();
  }, [filterBooks]);

  console.log('====================================');
  console.log('filteredBooks', filteredBooks);
  console.log('====================================');

=======
import "./search.css";

function Search() {
>>>>>>> main
  return (
    <div className="search_wrapper">
      <div className="sr_page">
        <h2>Search Books / Authors</h2>
<<<<<<< HEAD
        <div className="search_form">
          <input
            type="text"
            className="search_input"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
        <ul id="list_search">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Authors">Authors List</Link>
          </li>
        </ul>
      </div>

      {filteredBooks.map((book, i) => (
        <div key={i}>{book.title}</div>
      ))}
=======
        <form className="search_form">
          <input type="text" className="search_input" />
        </form>
        <ul id="list_search">
          <li>
            <a href="#">Genres List</a>
          </li>
          <li>
            <a href="#">Authors List</a>
          </li>
          <li>
            <a href="#">Best Selling</a>
          </li>
        </ul>
      </div>
>>>>>>> main
    </div>
  );
}

export default Search;
