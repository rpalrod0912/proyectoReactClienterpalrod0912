import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const LayoutPrivate = () => {
  const { usuario } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuario) {
      navigate("/login");
    }
  }, [usuario]);

  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default LayoutPrivate;
