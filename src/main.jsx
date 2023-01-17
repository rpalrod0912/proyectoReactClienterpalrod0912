import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { router } from "./router/";
import { RouterProvider } from "react-router-dom";
import UserProvider from "../src/contexts/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
