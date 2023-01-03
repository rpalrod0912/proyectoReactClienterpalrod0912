import React from "react";

import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons } = props;
  //console.log(props);

  /*const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };*/

  return (
    <div>
      <section class="pkDex">
        <h1>POKÉDEX DE KANTO</h1>
        <div class="resultados">
          <div class="filtro">
            <p>Mostrar Filtros</p>
            <img src="assets/images/Flecha.png" />
          </div>
          <div class="cardsDex">
            {pokemons.map((pokemon, idx) => {
              return (
                <Pokemon pokemon={pokemon} key={pokemon.name} />
                //A la hora de hacer listados usamos key cmo identificadores del componente
                /*<div class="cardPkm" key={pokemon.name}>
                  <div class="circle">
                    <a>
                      <img
                        class="dex1"
                        src="assets/images/Pokemons/Bulbasasur.png"
                      />
                    </a>
                  </div>
                  <p>Nº {idx + 1}</p>
                  <h3>{pokemon.name}</h3>
                </div>*/
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pokedex;
