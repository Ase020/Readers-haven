import "./my-profile-container.css";

const MyProfileContainer = () => {
  return (
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
  );
};

export default MyProfileContainer;
