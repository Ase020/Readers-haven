/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [allBook, setAllBook] = useState([]);

  const getAllbook = async () => {
    const res = await fetch("http://localhost:3000/books");
    const data = await res.json();
    setAllBook(data);
  };
  useEffect(() => {
    getAllbook();
  }, []);

  const value = [allBook, setAllBook];

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};
