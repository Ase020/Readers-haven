/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
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
} from './pages';
import { UserContext } from './context/user';
import { BooksContext } from './context/books';

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const [
    allBook,
    // , setAllBook
  ] = useContext(BooksContext);


  const handleLogin = (user) => {
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
    setIsLoggedin(true);
  };

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    setIsLoggedin(false);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout user={user} onLogout={handleLogout} isLoggedin={isLoggedin} />
      ),
      children: [
        {
          path: '/',
          element: <Home allBook={allBook} />,
        },
        {
          path: '/login',
          element: <Login onLogin={handleLogin} />,
        },
        {
          path: '/signup',
          element: <Signup onLogin={handleLogin} />,
        },
        {
          path: '/login/password_reset',
          element: <PasswordReset />,
        },
        {
          path: '/search',
          element: <Search allBook={allBook} />,
        },
        {
          path: '/authors',
          element: <Authors />,
        },
        {
          path: '/authors/:id',
          element: <Author />,
        },
        {
          path: '/books/:id',
          element: <Book />,
        },
        {
          path: '/books/add',
          element: <AddBook />,
        },
        {
          path: '/profile',
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
