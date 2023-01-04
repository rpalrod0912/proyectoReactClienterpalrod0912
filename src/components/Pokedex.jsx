import React from "react";
import LikeContext from "../contexts/likeContext";
import Paginacion from "./Paginacion";

import Pokemon from "./Pokemon";

const { useContext } = React;

const Pokedex = (props) => {
  const { likedPokemons } = useContext(LikeContext);
  //debugger;
  console.log(likedPokemons);
  const { pokemons, page, setPage, total, carga } = props;
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };
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

        <div>Favoritos:{likedPokemons.length}</div>
        <div class="resultados">
          <div class="filtro">
            <p>Mostrar Filtros</p>
            <img src="assets/images/Flecha.png" />
          </div>
          {carga ? (
            <div>Cargando Pokemons..</div>
          ) : (
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
          )}
        </div>
        <Paginacion
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </section>
    </div>
  );
};

export default Pokedex;
