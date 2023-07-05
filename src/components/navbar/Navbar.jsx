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
      <div id="nav">
        <Link className="nav-links" to="/search">
          Search
        </Link>
        <Link className="nav-links" to="/">
          Authors
        </Link>
        <Link className="nav-links" to="/">
          + 📖
        </Link>
        <img
          src={profile}
          className="img-placeholder"
          onClick={() => {
            setdropdown((prev) => !prev);
          }}
        />
      </div>

      {dropdown && (
        <div className="profile-option">
          <Link
            className="nav-links"
            to="/profile"
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
