// import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../../assets";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setdropdown] = useState(false);
  return (
    <nav className="nav-wrapper">
      <Link to="/">
        <h1 className="header">Readers Haven</h1>
      </Link>
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/">Genres</Link>
        </li>
        <li>
          <Link to="/">Authors</Link>
        </li>
        <li>
          <Link to="/">Best Selling</Link>
        </li>

        <li>
          <img
            src={profile}
            className="img-placeholder"
            onClick={() => {
              setdropdown((prev) => !prev);
            }}
          />
        </li>
      </ul>

      {dropdown && (
        <div className="profile-option">
          <Link
            to="/"
            onClick={() => {
              setdropdown((prev) => !prev);
            }}
          >
            View profile
          </Link>
          <button className="logout-btn" onClick={() => {}}>
            Log out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
