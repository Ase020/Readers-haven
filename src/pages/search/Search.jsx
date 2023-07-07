import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import SmallBook from '../../components/smallcard/Smallbook';
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

  return (
    <div className="search_wrapper">
      <div className="sr_page">
        <h2>Search Books</h2>

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

      {searchTerm &&
        filteredBooks.map((book, i) => (
          <div key={i} className="search_list">
            <SmallBook
              title={book.title}
              publish_date={book.publish_date}
              price={book.price}
              image={book.poster_url}
            />
          </div>
        ))}
      {/* <div>
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
      </div> */}
    </div>
  );
}

export default Search;
