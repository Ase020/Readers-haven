

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Home, Layout, Login, PasswordReset, Signup, Search } from "./pages";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
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
          element: <Search />,
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

