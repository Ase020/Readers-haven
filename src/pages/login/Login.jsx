import { Link } from "react-router-dom";
import { cover1 } from "../../assets";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-welcome-page">
          <img src={cover1} alt="cover" className="login-img" />

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

            <div className="signup-wrapper">
              <p className="signup-text">Don&apos;t have an account?</p>
              <button>
                <Link to="/signup">Sign up</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="login-form-wrapper">
          <h1 className="title">Login</h1>
          <form className="login-form">
            <input type="text" placeholder="Username" className="login-input" />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <p className="password-reset">
            Forgot password? <Link to="/login/password_reset"> Reset</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
