/* eslint-disable react/prop-types */
import "./my-profile-container.css";

const MyProfileContainer = ({ user }) => {
  return (
    <div className="my-profile-container">
      <div className="my-profile-pic-container">
        <img
          src={user?.image_url}
          alt={user?.last_name}
          className="my-profile-pic"
        />
      </div>

      <div className="my-profile-details">
        <div className="my-profile-detail">
          <h4 className="my-profile-detail-tag">First Name:</h4>
          <p className="my-profile-detail-value">{user?.first_name}</p>
        </div>

        <div className="my-profile-detail">
          <h4 className="my-profile-detail-tag">Last Name:</h4>
          <p className="my-profile-detail-value">{user?.last_name}</p>
        </div>

        <div className="my-profile-detail">
          <h4 className="my-profile-detail-tag">Email:</h4>
          <p className="my-profile-detail-value email">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfileContainer;
