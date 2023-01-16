import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";

const LayoutPrivate = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div>
      LayoutPrivate
      <Outlet />
    </div>
  );
};

export default LayoutPrivate;
