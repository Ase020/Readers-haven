
// import React from "react";
import "./navbar.css"
import ImgPlaceHolder from "../../assets/img-placeholder.png"

const Navbar = () => {
  return (

    <div className="nav-wrapper">
      <h1 className="header">Readers Haven</h1>
      <ul id="nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
        <li>
          <a href="#">Genres</a>
        </li>
        <li>
          <a href="#">Authors</a>
        </li>
         <li>
          <a href="#">Best Selling</a>
        </li>
         <li>
          {/* <a href="#">Best Selling</a> */}
          <img src={ImgPlaceHolder} className="img-placeholder" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
