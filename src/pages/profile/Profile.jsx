import { Link } from "react-router-dom";
import { EditOutlinedIcon } from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import "./profile.css";

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <h1 className="profile-welcome">
        <span className="profile-welcome-span">My </span> Profile
      </h1>

      <div className="my-profile-wrapper">
        <div className="my-profile-container">
          <div className="my-profile-pic-container">
            <img
              src="https://images.pexels.com/photos/17481292/pexels-photo-17481292.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="pic"
              className="my-profile-pic"
            />
          </div>

          <div className="my-profile-details">
            <div className="my-profile-detail">
              <h4 className="my-profile-detail-tag">First Name:</h4>
              <p className="my-profile-detail-value">Felix</p>
            </div>

            <div className="my-profile-detail">
              <h4 className="my-profile-detail-tag">Last Name:</h4>
              <p className="my-profile-detail-value">Olali</p>
            </div>

            <div className="my-profile-detail">
              <h4 className="my-profile-detail-tag">Email:</h4>
              <p className="my-profile-detail-value">
                felix.nyalenda@student.moringa.com
              </p>
            </div>
          </div>
        </div>
        <div className="my-books-container">
          <h3 className="my-books-header">
            <span className="my-books-header-span">My </span>Books
          </h3>

          <div className="my-books-container">
            <div className="my-book-container">
              <Link to={"/"}>Moringa Syllabus</Link>

              <div className="my-book-btn-wrapper">
                <button>
                  <EditOutlinedIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
