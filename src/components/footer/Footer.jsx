import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links-container">
        {/* column 1 */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul className="links">
            <li>About</li>
            <li>Careers</li>
            <li>Brand Center</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* column 2 */}
        <div className="footer-links">
          <h4>Help & Support</h4>
          <ul className="links">
            <li>Contact Us</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        {/* column 3 */}
        <div className="footer-links">
          <h4>Download</h4>
          <ul className="links">
            <li>iOS</li>
            <li>Android</li>
            <li>Windows</li>
            <li>MacOS</li>
          </ul>
        </div>
      </div>

      <p className="col-sm">
        &copy; {new Date().getFullYear} All right reserved | Terms of service |
        Privacy
      </p>
    </footer>
  );
};

export default Footer;
