import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column 1 */}
          <div className="col">
            <h4>About Us</h4>
            <p>We are a team of passionate individuals dedicated to providing high-quality products and services.</p>
          </div>
          {/* column 2 */}
          <div className="col">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Main Street, City, Country</li>
            </ul>
          </div>
          {/* column 3 */}
          <div className="col">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer content */}
        <hr />
        <div className="row">
          <div className="col-sm">
            &copy; {new Date().getFullYear()} All rights reserved | Terms of Service | Privacy Policy
          </div>
        </div>
        </div>
        {/* End of footer content */}
      </div>
  );
};

export default Footer;
