/* eslint-disable react/prop-types */
// import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { profile } from "../../assets";
import "./navbar.css";

const Navbar = ({ user, onLogout, isLoggedin, setIsLoggedin }) => {
  const [dropdown, setdropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch("https://peaceful-oasis-68149-c720121aea60.herokuapp.com/logout", {
      method: "DELETE",
    }).then(() => onLogout());
    setdropdown(false);
    setIsLoggedin(false);
    navigate("/login");
  };

  return (
    <nav className="nav-wrapper">
      <Link to="/">
        <h1 className="header">Readers Haven</h1>
      </Link>
      <div id="nav">
        <Link className="nav-links" to="/search">
          Search
        </Link>
        <Link className="nav-links" to="/authors">
          Authors
        </Link>
        <Link className="nav-links" to="/books/add">
          + 📖
        </Link>

        {isLoggedin ? (
          // >>>>>>> main
          <img
            src={user?.image_url ? user?.image_url : profile}
            alt={user?.first_name}
            className="img-placeholder"
            onClick={() => {
              setdropdown((prev) => !prev);
            }}
          />
        ) : (
          <Link to="/login" className="nav-links">
            Log in
          </Link>
        )}
      </div>

      {dropdown && (
        <div className="profile-option">
          <p className="username">{user?.first_name}</p>
          <Link
            className="nav-links"
            to="/profile"
            onClick={() => {
              setdropdown((prev) => !prev);
            }}
          >
            View profile
          </Link>
          <button className="logout-btn" onClick={handleLogout}>
            Log out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
