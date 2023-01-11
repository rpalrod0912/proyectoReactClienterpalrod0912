import React from "react";
import { Link, NavLink } from "react-router-dom";
import { getPokemonData, getPokemons, searchPokemon } from "../api";
import Pokedex from "../components/Pokedex";
import Paginacion from "../components/Paginacion";
import { LikeProvider } from "../contexts/likeContext";
import Searchbar from "../components/Searchbar";
import Navbar from "../components/Navbar";
import BusquedaDex from "../components/BusquedaDex";
import NoExiste from "../components/NoExiste";
import Resultados from "../components/Resultados";

const { useState, useEffect } = React;

const JohtoDex = () => {
  const [tipo, setTipo] = useState("");
  const [pkmns, setPkmns] = useState(151);
  const [cantPkmns, setCantPkmns] = useState(10);
  const [total, setTotal] = useState(10);
  //  debugger;

  return (
    <Resultados
      tipo={tipo}
      setTipo={setTipo}
      pkmns={pkmns}
      setPkmns={setPkmns}
      cantPkmns={cantPkmns}
      setCantPkmns={setCantPkmns}
      total={total}
      setTotal={setTotal}
    ></Resultados>
  );
};

export default JohtoDex;
