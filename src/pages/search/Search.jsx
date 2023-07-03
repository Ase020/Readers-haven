// import React from 'react'
import "./search.css"

function Search() {
  return (
    <div className="search_wrapper">
      <div className="sr_page">
      <h2>Search Books / Authors</h2>
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
    </div>
  );
}

export default Search;
