/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cover1 } from "../../assets";
import "./login.css";

const Login = ({ onLogin, setIsLoggedin }) => {
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    // fetch("https://peaceful-oasis-68149-c720121aea60.herokuapp.com/login", {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Login successful");
          res.json().then((user) => {
            onLogin(user);
          });
          setIsLoggedin(true);
          navigate("/");
        } else {
          setLoginError(true);
          throw new Error("Login failed!");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

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
          <form className="login-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" className="login-input" />
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

          {loginError && <p>Wrong Email/Password combination!</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
