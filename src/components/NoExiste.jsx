import React from "react";
import { useRouteError, Link, NavLink } from "react-router-dom";

const NoExiste = () => {
  const error = useRouteError();

  console.log(error);
  return (
    <body class="bodyError theme">
      <h1 class="error">Sin Resultados</h1>
      <h2 class="errorText">Este Pokemon No Existe</h2>
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

export default NoExiste;
