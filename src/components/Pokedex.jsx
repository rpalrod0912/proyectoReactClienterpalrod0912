import React, { useState } from "react";
import LikeContext from "../contexts/likeContext";
import Paginacion from "./Paginacion";
import { ColorRing } from "react-loader-spinner";
import Pokemon from "./Pokemon";
import flecha from "../images/Flecha.png";
import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";

const { useContext } = React;

const Pokedex = (props) => {
  const { likedPokemons } = useContext(LikeContext);
  //debugger;
  console.log(likedPokemons);
  const {
    pokemons,
    page,
    setPage,
    total,
    carga,
    tipo,
    pkmns,
    setPkmns,
    cantPkmns,
    setCantPkmns,
    filtro,
    setFiltro,
    valorFiltro,
    setValorFiltro,
    tipoFiltro,
    setTipoFiltro,
  } = props;
  debugger;
  const [filterMenu, setFilterMenu] = useState(false);
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
    debugger;
    if (page !== 0) {
      setPkmns(pkmns - cantPkmns);
    }
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
    debugger;
    if (page !== total) {
      setPkmns(pkmns + cantPkmns);
    }
  };

  const handleOnClick = (e) => {
    console.log(e.target.id);
    setFiltro(true);
    setValorFiltro(e.target.id);
    debugger;
    console.log(e.target.type);
    console.log(filtro);
    console.log(valorFiltro);
    setTipoFiltro(e.target.type);
  };

  const handleReset = () => {
    setFiltro(false);
    setTipoFiltro("");
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
            <div className="filtrado">
              <p>Filtros</p>
              <button
                onClick={() => {
                  if (filterMenu === true) {
                    setFilterMenu(false);
                  } else {
                    setFilterMenu(true);
                  }
                }}
              >
                <img src={flecha} />
              </button>
            </div>
            <>
              {filterMenu ? (
                <>
                  <p>Filtrar por tipo</p>
                  <div className="tipos" style={{ margin: "1rem" }}>
                    <button
                      className="fire"
                      id="fire"
                      onClick={(e) => handleOnClick(e)}
                    >
                      FUEGO
                    </button>
                    <button
                      className="grass"
                      id="grass"
                      onClick={(e) => handleOnClick(e)}
                    >
                      PLANTA
                    </button>
                    <button
                      className="water"
                      id="water"
                      onClick={(e) => handleOnClick(e)}
                    >
                      AGUA
                    </button>
                    <button
                      className="poison"
                      id="poison"
                      onClick={(e) => handleOnClick(e)}
                    >
                      VENENO
                    </button>
                    <button
                      className="psychic"
                      id="psychic"
                      onClick={(e) => handleOnClick(e)}
                    >
                      PSÍQUICO
                    </button>
                    <button
                      className="steel"
                      id="steel"
                      onClick={(e) => handleOnClick(e)}
                    >
                      ACERO
                    </button>
                    <button
                      className="ground"
                      id="ground"
                      onClick={(e) => handleOnClick(e)}
                    >
                      GROUND
                    </button>
                    <button
                      className="rock"
                      id="rock"
                      onClick={(e) => handleOnClick(e)}
                    >
                      ROCA
                    </button>
                    <button
                      className="electric"
                      id="electric"
                      onClick={(e) => handleOnClick(e)}
                    >
                      ELÉCTRICO
                    </button>
                    <button
                      className="flying"
                      id="flying"
                      onClick={(e) => handleOnClick(e)}
                    >
                      VOLADOR
                    </button>
                    <button
                      className="dragon"
                      id="dragon"
                      onClick={(e) => handleOnClick(e)}
                    >
                      DRAGÓN
                    </button>
                    <button
                      className="ice"
                      id="ice"
                      onClick={(e) => handleOnClick(e)}
                    >
                      HIELO
                    </button>
                    <button
                      className="dark"
                      id="dark"
                      onClick={(e) => handleOnClick(e)}
                    >
                      OSCURO
                    </button>
                    <button
                      className="fighting"
                      id="fighting"
                      onClick={(e) => handleOnClick(e)}
                    >
                      LUCHA
                    </button>
                    <button
                      className="ghost"
                      id="ghost"
                      onClick={(e) => handleOnClick(e)}
                    >
                      FANTASMA
                    </button>
                    <button
                      className="fairy"
                      id="fairy"
                      onClick={(e) => handleOnClick(e)}
                    >
                      HADA
                    </button>
                    <button
                      className="bug"
                      id="bug"
                      onClick={(e) => handleOnClick(e)}
                    >
                      BICHO
                    </button>
                    <button
                      className="normal"
                      id="normal"
                      onClick={(e) => handleOnClick(e)}
                    >
                      NORMAL
                    </button>
                  </div>
                  <p>Filtrar por Generación</p>

                  <div>
                    <div>
                      <input
                        type="radio"
                        id="1"
                        className="radioInput"
                        name="generation"
                        onClick={(e) => handleOnClick(e)}
                      />{" "}
                      Kanto
                      <input
                        type="radio"
                        id="2"
                        className="radioInput"
                        name="generation"
                        onClick={(e) => handleOnClick(e)}
                      />{" "}
                      Johto
                      <input
                        type="radio"
                        id="3"
                        className="radioInput"
                        name="generation"
                        onClick={(e) => handleOnClick(e)}
                      />{" "}
                      Hoenn
                      <input
                        type="radio"
                        id="4"
                        className="radioInput"
                        name="generation"
                        onClick={(e) => handleOnClick(e)}
                      />{" "}
                      Sinnoh
                      <input
                        type="radio"
                        id="5"
                        className="radioInput"
                        name="generation"
                        onClick={(e) => handleOnClick(e)}
                      />{" "}
                      Teselia
                    </div>

                    <input
                      type="reset"
                      className="resetBtn"
                      onClick={handleReset}
                    />
                  </div>
                </>
              ) : (
                <p></p>
              )}
            </>
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
              <></>
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
