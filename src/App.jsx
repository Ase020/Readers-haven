import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import {
  Home,
  Layout,
  Login,
  PasswordReset,
  Signup,
  Search,
  Authors,
} from "./pages";

const App = () => {
  const [allBook, setAllBook] = useState([]);
  const getAllbook = async () => {
    const res = await fetch(
      "https://peaceful-oasis-68149-c720121aea60.herokuapp.com/books"
    );
    const data = await res.json();
    setAllBook(data);
    console.log(data);
  };
  useEffect(() => {
    getAllbook();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home allBook={allBook} />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login/password_reset",
          element: <PasswordReset />,
        },
        {
          path: "/search",
          element: <Search allBook={allBook} />,
        },
        {
          path: "/authors",
          element: <Authors />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
