/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";

import { MyBooksContainer, MyProfileContainer } from "../../components";
import { UserContext } from "../../context/user";
import "./profile.css";

const Profile = () => {
  const [user, setUser] = useContext(UserContext);

  if (isNaN(user.id)) {
    // alert("You have to be logged in to view this page!");
    window.location.href = "/login";
  }

  useEffect(() => {
    fetch(`http://localhost:3000/users/${user.id}`)
      .then((res) => {
        if (res.ok) {
          res.json().then(setUser);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="profile-wrapper">
      <h1 className="profile-welcome">
        <span className="profile-welcome-span">Hi </span> {user.first_name}
      </h1>

      <div className="my-profile-wrapper">
        <MyProfileContainer user={user} />
        <MyBooksContainer user={user} />
      </div>
    </div>
  );
};

export default Profile;
