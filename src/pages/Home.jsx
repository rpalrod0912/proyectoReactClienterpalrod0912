import React from "react";
import { Link, NavLink } from "react-router-dom";

import imBienvenida from "../images/FondoInicial.jpg";
import imSec1 from "../images/Inicio1.png";
import imSec2 from "../images/Inicio2.png";
import imSec3 from "../images/Inicio3.jpg";

const Home = () => {
  return (
    <main>
      <section className="secInicio">
        <img className="imInicio" src={imBienvenida} />
        <p>
          <h1>¡Bienvenido a la PokéWiki Entrenador!</h1>
        </p>
      </section>
      <section className="secMed">
        <h1 className="titulo-secF">
          ¿Qúe necesitas saber de Pokémon? sea, lo que sea lo encontrarás aquí:
        </h1>
      </section>
      <section className="secFinal">
        <div className="opcion1">
          <h1>PokéDex</h1>
          <NavLink to="/PokeDex">
            <img className="im1" src={imSec1} />
          </NavLink>
        </div>
        <div className="opcion2">
          <h1>Regiones</h1>
          <NavLink to="/wiki">
            <img className="im2" src={imSec2} />
          </NavLink>
        </div>
        <div className="opcion3">
          <h1>Contacto</h1>
          <NavLink to="/about">
            <img className="im3" src={imSec3} />
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default Home;
