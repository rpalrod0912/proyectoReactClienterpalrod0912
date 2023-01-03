import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutPublic = () => {
  return (
    <div>
      <Navbar />
      {/* <nav>Navbar</nav> */}
      {/* <main>Main</main> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutPublic;
