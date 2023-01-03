import React from "react";
import { useRouteError, Link, NavLink } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  console.log(error);
  return (
    <body class="bodyError theme">
      <h1 class="error">404</h1>
      <h2 class="errorText">Uuups.... Parece que esta página no existe</h2>
      <div class="pag">
        <div class="pokeball">
          <div class="pokeball__button"></div>
        </div>
      </div>
      <Link to="/">
        <button>
          <p>VOLVER A INICIO</p>
        </button>
      </Link>
    </body>
  );
};

export default NotFound;
