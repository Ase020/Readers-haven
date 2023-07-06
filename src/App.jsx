import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Home, Layout, Login, PasswordReset, Signup, Search, Book } from "./pages";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    // fetch("https://peaceful-oasis-68149-c720121aea60.herokuapp.com/me")
    fetch("http://localhost:3000/me")
      .then((res) => {
        if (res.ok) {
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
          element: <Home />,
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
          element: <Search />,
        },
        {
          path: "/books/:id",
          element: <Book />,
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
