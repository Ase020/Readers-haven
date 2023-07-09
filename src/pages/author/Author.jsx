/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AuthorBooks, AuthorProfile } from "../../components";
import "./author.css";

const Author = () => {
  const [author, setAuthor] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://peaceful-oasis-68149-c720121aea60.herokuapp.com/authors/${id}`)
      .then((res) => res.json())
      .then(setAuthor)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="author-wrapper">
      <h1 className="author-welcome">
        <span className="author-welcome-span">
          {author?.name}
          {"'s"}{" "}
        </span>{" "}
        profile
      </h1>

      <div className="my-author-wrapper">
        <AuthorProfile author={author} />
        <AuthorBooks books={author?.books} />
      </div>
    </div>
  );
};

export default Author;
