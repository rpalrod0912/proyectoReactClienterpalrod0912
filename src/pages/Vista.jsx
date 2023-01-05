import React from "react";
import { Link, NavLink } from "react-router-dom";
//use Location necesario para importar props del componente desde que se llamo, en react router v6
import { useLocation } from "react-router-dom";
import { getDescription } from "../api";
import { useEffect, useState } from "react";

const Vista = (props) => {
  //Recibe las props routing
  const location = useLocation();
  const { state } = location;
  debugger;
  const fetchDescription = async () => {
    try {
      const data = await getDescription(state.pokemon.id);
      return data;
    } catch (err) {}
    const data = fetchDescription();
    console.log(data);
  };

  const myData = getDescription(state.pokemon.id);
  debugger;
  console.log(myData);
  console.log(state.pokemon);
  //state.pokemon
  return (
    <main class="bdy">
      <section class="dexBdy">
        <div class="nav">
          <img class="izq" src="assets/images/arrow-point-to-right.png" />
          <p>Nº {state.pokemon.id}</p>
          <img class="der" src="assets/images/arrow-point-to-right.png" />
        </div>
        <article class="pkmDex">
          <div class="pkmPreset">
            <div class="circle">
              <img
                src={state.pokemon.sprites.other.dream_world.front_default}
              />
            </div>
            <div class="types">
              <p class="p1">Tipo</p>
              <p class="p1">Debilidad</p>
              <p class="typeElectric"></p>
              <p class="typeGround"></p>
            </div>
          </div>
          <div class="info">
            <h1>{state.pokemon.name}</h1>
            <p class="p1">
              Cuanto más potente es la energía eléctrica que genera este
              Pokémon, más suaves y elásticas se vuelven las bolsas de sus
              mejillas.
            </p>
          </div>
        </article>
        <article class="stats">
          <p>
            Altura
            <span class="pkData">0.4m</span>
          </p>
          <p>
            Categoría
            <span class="pkData">Ratón</span>
          </p>
          <p>
            Habilidad
            <span class="pkData">
              {state.pokemon.abilities[0].ability.name}
            </span>
          </p>
          <p>
            Peso
            <span class="pkData">{state.pokemon.weight}</span>
          </p>
          <p>
            Sexo
            <span class="pkData">Masculino/Femenino</span>
          </p>
        </article>
        <h2 class="evoTitle">Evoluciones</h2>
      </section>
    </main>
  );
};

export default Vista;
