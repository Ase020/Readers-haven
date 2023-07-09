/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import {
  Home,
  Layout,
  Login,
  PasswordReset,
  Signup,
  Search,
  Book,
  Authors,
  AddBook,
  Profile,
  Author,
} from "./pages";
import { UserContext } from "./context/user";
import { BooksContext } from "./context/books";

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const [allBook] = useContext(BooksContext);

  useEffect(() => {
    // fetch("https://peaceful-oasis-68149-c720121aea60.herokuapp.com/me")
    fetch("http://localhost:3000/me", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("logged in");
          return res.json();
        } else {
          throw new Error("User not logged in");
        }
      })
      .then((user) => {
        setUser(user);
        setIsLoggedin(true);
      })
      .catch(() => {
        setIsLoggedin(false);
      });
  }, []);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // const getAllbook = async () => {
  //   const res = await fetch("http://localhost:3000/books");
  //   const data = await res.json();
  //   setAllBook(data);
  // };
  // useEffect(() => {
  //   getAllbook();
  // }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          user={user}
          onLogout={handleLogout}
          isLoggedin={isLoggedin}
          setIsLoggedin={setIsLoggedin}
        />
      ),
      children: [
        {
          path: "/",
          element: <Home allBook={allBook} />,
        },
        {
          path: "/login",
          element: (
            <Login onLogin={handleLogin} setIsLoggedin={setIsLoggedin} />
          ),
        },
        {
          path: "/signup",
          element: (
            <Signup setIsLoggedin={setIsLoggedin} onLogin={handleLogin} />
          ),
        },
        {
          path: "/login/password_reset",
          element: <PasswordReset setIsLoggedin={setIsLoggedin} />,
        },
        {
          path: "/search",
          element: <Search allBook={allBook} />,
        },
        {
          path: "/authors",
          element: <Authors />,
        },
        {
          path: "/authors/:id",
          element: <Author />,
        },
        {
          path: "/books/:id",
          element: <Book />,
        },
        {
          path: "/books/add",
          element: <AddBook />,
        },
        {
          path: "/profile",
          element: <Profile />,
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
