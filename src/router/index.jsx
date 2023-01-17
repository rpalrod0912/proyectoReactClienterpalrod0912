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
import HoennDex from "../pages/HoennDex";
import SinnohDex from "../pages/SinnohDex";
import TeseliaDex from "../pages/TeseliaDex";
import LayoutPrivate from "../layouts/LayoutPrivate";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
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
        path: "/Hoenn",
        element: <HoennDex />,
      },
      {
        path: "/Sinnoh",
        element: <SinnohDex />,
      },
      {
        path: "/Teselia",
        element: <TeseliaDex />,
      },

      {
        path: "/Inicio",
        element: <LayoutPrivate />,
        children: [
          {
            path: "/Inicio/home",
            element: <Home />,
          },
          {
            path: "/Inicio/profile",
            element: <Profile />,
          },
          {
            path: "/Inicio/Favoritos",
            element: <Favoritos />,
          },
          {
            path: "/Inicio/PokeDex",
            element: <PokeDex />,
          },
        ],
      },
    ],
  },
]);
