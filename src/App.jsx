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
  Book,
  Authors,
  AddBook,
} from "./pages";

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    // fetch("https://peaceful-oasis-68149-c720121aea60.herokuapp.com/me")
    // fetch("http://localhost:3000/me")
    //   .then((res) => {
    //     if (res.ok) {
    //       console.log("logged in");
    //       return res.json();
    //     } else {
    //       throw new Error("User not logged in");
    //     }
    //   })
    //   .then((user) => {
    //     setUser(user);
    //     setIsLoggedin(true);
    //   })
    //   .catch(() => {
    //     setIsLoggedin(false);
    //   });
    fetch("http://localhost:3000/me")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const [allBook, setAllBook] = useState([]);
  const getAllbook = async () => {
    const res = await fetch(
      "https://peaceful-oasis-68149-c720121aea60.herokuapp.com/books"
    );
    const data = await res.json();
    setAllBook(data);
    // console.log(data);
  };
  useEffect(() => {
    getAllbook();
  }, []);

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
          path: "/books/:id",
          element: <Book />,
        },
        {
          path: "/books/add",
          element: <AddBook />,
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
