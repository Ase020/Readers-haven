import { Link } from "react-router-dom";
import "./password-reset.css";
import { cover3 } from "../../assets";
import { useState } from "react";

const PasswordReset = () => {
  const [apiRes, setApiRes] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      new_password: e.target[1].value,
      confirm_password: e.target[2].value,
    };

    if (user.new_password !== user.confirm_password) {
      setApiRes({
        error: "Error! New password and confirm password do not match.",
      });
    }

    fetch("https://peaceful-oasis-68149-c720121aea60.herokuapp.com/password/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => setApiRes(data))
      .catch(() => setApiRes({ error: "Error! Failed to reset password." }));
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
            <input type="email" placeholder="Email" className="reset-input" />

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

          {apiRes && apiRes.message && <p>{apiRes.message}</p>}
          {apiRes && apiRes.error && <p>{apiRes.error}</p>}
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
