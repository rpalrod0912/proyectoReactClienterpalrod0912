import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  return (
    <div>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">Footer</footer>
    </div>
  );
};
export default LayoutPublic;
