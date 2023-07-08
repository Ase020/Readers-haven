/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const AuthorsContext = createContext();

export const AuthorsProvider = ({ children }) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/authors")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);

  const value = [authors, setAuthors];
  return (
    <AuthorsContext.Provider value={value}>{children}</AuthorsContext.Provider>
  );
};
