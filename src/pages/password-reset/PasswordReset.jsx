import { Link } from "react-router-dom";
import "./password-reset.css";
import { cover3 } from "../../assets";

const PasswordReset = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      confirm_password: e.target[3].value,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then(console.log);
  };

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
          <h1 className="title">Reset password</h1>
          <form className="reset-form" onSubmit={handleSubmit}>
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
