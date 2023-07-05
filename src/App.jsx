import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Home, Layout, Login, PasswordReset, Signup, Search } from "./pages";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
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
          element: <Signup setIsLoggedin={setIsLoggedin} />,
        },
        {
          path: "/login/password_reset",
          element: <PasswordReset setIsLoggedin={setIsLoggedin} />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        //  {
        //   path: "/genres",
        //   element: <Genre />,
        // },
        //  {
        //   path: "/author/:id",
        //   element: <Author />,
        // },
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
