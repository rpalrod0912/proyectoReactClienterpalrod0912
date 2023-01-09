import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layouts/LayoutPublic";
import Wiki from "../pages/Wiki";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PokeDex from "../pages/PokeDex";
import KantoDex from "../pages/KantoDex";
import JohtoDex from "../pages/JohtoDex";
import Vista from "../pages/Vista";
import Favoritos from "../pages/Favoritos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        // path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/wiki",
        element: <Wiki />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/PokeDex",
        element: <PokeDex />,
      },
      {
        path: "/Kanto",
        element: <KantoDex />,
      },
      {
        path: "/Johto",
        element: <JohtoDex />,
      },
      {
        path: "/Pokemon",
        element: <Vista pokemon />,
      },
      {
        path: "/Favoritos",
        element: <Favoritos />,
      },
    ],
  },
]);
