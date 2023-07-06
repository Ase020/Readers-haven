// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { profile } from "../../assets";
import "./navbar.css";

const Navbar = () => {
  const [dropdown, setdropdown] = useState(false);
  return (
    <nav className="nav-wrapper">
      <Link to="/">
        <h1 className="header">Readers Haven</h1>
      </Link>
      <ul id="nav">
        <li>
          <Link to="/search">Search</Link>
        </li>
        {/* <li>
          <Link to="/genres">Genres</Link>
        </li> */}
        <li>
          <Link to="/authors">Authors</Link>
        </li>
        <li>
          <Link to="/">+📖</Link>
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
