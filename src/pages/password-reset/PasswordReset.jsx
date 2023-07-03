import { Link } from "react-router-dom";
import "./password-reset.css";
import { cover3 } from "../../assets";

const PasswordReset = () => {
  return (
    <div className="reset">
      <div className="reset-container">
        <div className="reset-welcome-page">
          <img src={cover3} alt="cover" className="reset-img" />

          <div className="welcome-text">
            <h1 className="welcome-text-title">
              Readers <br />
              Haven
            </h1>

            <p className="welcome-text-desc">
              Welcome to the best platform on the web for your favorite book
              reviews trusted and approved by thousands of reknowned authors and
              publishers.
            </p>

            <div className="reset-wrapper">
              <p className="reset-text">Back to login</p>
              <button>
                <Link to="/login">Log in</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="reset-form-wrapper">
          <h1 className="title">Rest password</h1>
          <form className="reset-form">
            <input type="text" placeholder="Username" className="reset-input" />

            <input
              type="password"
              placeholder="New password"
              className="reset-input"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="reset-input"
            />
            <button type="submit" className="reset-btn">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
