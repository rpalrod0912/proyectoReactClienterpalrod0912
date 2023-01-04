import React from "react";
import { Link, NavLink } from "react-router-dom";
import pikInicio from "../images/PikachuDexInicio.png";
import img2 from "../images/starters.png";

import dex1 from "../images/KantoDex.png";
import dex2 from "../images/JOHTODEX.png";
import dex3 from "../images/HoennDex.png";
import dex4 from "../images/SinnohDex.png";
import dex5 from "../images/pokedex-small.png";

const Wiki = () => {
  return (
    <main class="Dex">
      <section class="op1 wrapper">
        <a>
          <img class="im1" src={pikInicio} />
        </a>
        <div class="cont1">
          <h1>POKÉDEX NACIONAL</h1>
          <p>
            Obtén Información de todos los pokémon existentes hasta la fecha
          </p>
          <button>ACCEDER</button>
        </div>
      </section>
      <section class="op2">
        <a>
          <img class="im2" src={img2} />
        </a>
        <h1>PÓKEDEX ORIGINAL</h1>
        <p>Encuentra Información de los pokémon de la región original</p>
        <button>ACCEDER</button>
      </section>
      <section class="op3">
        <h2>REGIONES DISPONIBLES</h2>
        <p>
          Desde la primera hasta la novena generación de Pokémon tenemos
          disponibles todas las generaciones para que consultes su información y
          puedas completar los juegos sin ningún problema.
        </p>
        <div class="cards">
          <div class="card">
            <a>
              <img class="dex1" src={dex1} />
            </a>
            <button>KANTO</button>
          </div>
          <div class="card">
            <a>
              <img class="dex1" src={dex2} />
            </a>
            <button>JOHTO</button>
          </div>
          <div class="card">
            <a>
              <img class="dex1" src={dex3} />
            </a>
            <button>HOENN</button>
          </div>
          <div class="card">
            <a>
              <img class="dex1" src={dex4} />
            </a>
            <button>SINNOH</button>
          </div>
          <div class="card">
            <a>
              <img class="dex1" src={dex5} />
            </a>
            <button>ALEATORIO</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Wiki;