import { MyBooksContainer, MyProfileContainer } from "../../components";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <h1 className="profile-welcome">
        <span className="profile-welcome-span">My </span> Profile
      </h1>

      <div className="my-profile-wrapper">
        <MyProfileContainer />
        <MyBooksContainer />
      </div>
    </div>
  );
};

export default Profile;
