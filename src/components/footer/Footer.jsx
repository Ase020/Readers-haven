import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* column 1 */}
            <div className="col">
              <h4>unwritten yet</h4>
              <ul className="list-unstyled">
                <li>456465w5745</li>
                <li>dsdfbzgfbf</li>
                <li>dgsdbxfgfb</li>
              </ul>
            </div>
            {/* column 2 */}
            <div className="col">
              <h4>welcome</h4>
              <ul className="list-unstyled">
                <li>dfrgergb</li>
                <li>dfgzdfgzdfgz</li>
                <li>zdfgzdfnzdfh</li>
              </ul>
            </div>
            {/* column 3 */}
            <div className="col">
              <h4>full enough</h4>
              <ul className="list-unstyled">
                <li>zdfgbzdfbz</li>
                <li>dfgzdfgdgadf</li>
                <li>zfvardgdggd</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear} All right reserved| Terms of service | Privacy
            </p>
          </div>
        </div>
      </div>
  );
};

export default Footer;
