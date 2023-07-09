/* eslint-disable react/prop-types */
import "./author-profile.css";

const AuthorProfile = ({ author }) => {
  return (
    <div className="author-profile-container">
      <div className="author-profile-pic-container">
        <img
          src={author?.image_url}
          alt={author?.name}
          className="author-profile-pic"
        />
      </div>

      <div className="author-profile-details">
        <div className="author-profile-detail">
          <h4 className="author-profile-detail-tag">Name:</h4>
          <p className="author-profile-detail-value">{author?.name}</p>
        </div>

        <div className="author-profile-detail">
          <h4 className="author-profile-detail-tag">Gender:</h4>
          <p className="author-profile-detail-value">{author?.gender}</p>
        </div>

        <div className="author-profile-detail">
          <h4 className="author-profile-detail-tag">Nationality:</h4>
          <p className="author-profile-detail-value">{author?.nationality}</p>
        </div>

        <div className="author-profile-detail">
          <h4 className="author-profile-detail-tag">Email:</h4>
          <p className="author-profile-detail-value email">{author?.email}</p>
        </div>

        <div className="author-profile-detail">
          <h4 className="author-profile-detail-tag">Bio:</h4>
          <p className="author-profile-detail-value email">{author?.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
