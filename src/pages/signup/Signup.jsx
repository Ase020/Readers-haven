/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { cover2 } from "../../assets";

const Signup = ({ onLogin, setIsLoggedin }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      first_name: e.target[0].value,
      last_name: e.target[1].value,
      email: e.target[2].value,
      image_url: e.target[3].value,
      password: e.target[4].value,
      confirm_password: e.target[5].value,
    };

    // console.log(user);

    // fetch("https://peaceful-oasis-68149-c720121aea60.herokuapp.com/signup", {
    fetch("https://peaceful-oasis-68149-c720121aea60.herokuapp.com/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then(onLogin);
    setIsLoggedin(true);
    navigate("/");
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-welcome-page">
          <img src={cover2} alt="cover" className="signup-img" />

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
              <p className="signup-text">Have an account?</p>
              <button>
                <Link to="/login">Log in</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="signup-form-wrapper">
          <h1 className="title">Sign up</h1>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First name"
              className="signup-input"
            />

            <input
              type="text"
              placeholder="Last name"
              className="signup-input"
            />

            <input type="email" placeholder="Email" className="signup-input" />
            <input
              type="text"
              placeholder="Image url"
              className="signup-input"
            />
            <input
              type="password"
              placeholder="Password"
              className="signup-input"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="signup-input"
            />
            <button type="submit" className="signup-btn">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
