/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [allBook, setAllBook] = useState([]);

  const value = [allBook, setAllBook];

  // object value
  // const valueOjg = {allBook, setAllBook};

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};
