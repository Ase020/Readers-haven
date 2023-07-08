import { useContext } from "react";

import { MyBooksContainer, MyProfileContainer } from "../../components";
import { UserContext } from "../../context/user";
import "./profile.css";

const Profile = () => {
  const [user] = useContext(UserContext);

  if (isNaN(user.id)) {
    // alert("You have to be logged in to view this page!");
    window.location.href = "/login";
  }

  console.log("user: ", user);
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
