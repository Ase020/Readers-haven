import { Outlet } from "react-router-dom";

import { Navbar, Footer } from "../components";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="bg">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
