/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";
import "./author-card.css";

const AuthorCard = ({ author }) => {
  return (
    <Tilt>
      <div className="author-card">
        <img
          src={author.image_url}
          alt={author.name}
          className="author_card-img"
        />
        <h4 className="author_card-name">{author.name}</h4>
      </div>
    </Tilt>
  );
};

export default AuthorCard;
