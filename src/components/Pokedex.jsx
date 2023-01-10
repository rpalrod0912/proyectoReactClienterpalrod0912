import React from "react";
import LikeContext from "../contexts/likeContext";
import Paginacion from "./Paginacion";
import { ColorRing } from "react-loader-spinner";
import Pokemon from "./Pokemon";

const { useContext } = React;

const Pokedex = (props) => {
  const { likedPokemons } = useContext(LikeContext);
  //debugger;
  console.log(likedPokemons);
  const { pokemons, page, setPage, total, carga, tipo, pkmns, setPkmns } =
    props;
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
    setPkmns(pkmns - 10);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
    setPkmns(pkmns + 10);
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
  //Spinner:https://mhnpd.github.io/react-loader-spinner/
  return (
    <div>
      <section class="pkDex">
        <h1>POKÉDEX {tipo}</h1>

        <div>Favoritos:{likedPokemons.length}</div>
        <div class="resultados">
          <div class="filtro">
            <p>Mostrar Filtros</p>
            <img src="assets/images/Flecha.png" />
          </div>
          {carga ? (
            <ColorRing
              visible={true}
              height="400"
              width="400"
              ariaLabel="blocks-loading"
              wrapperStyle={{
                display: "flex",
                margin: "0 auto",
              }}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            />
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
          page={page}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </section>
    </div>
  );
};

export default Pokedex;
