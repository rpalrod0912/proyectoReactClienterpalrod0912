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
import Pokemon from "../components/Pokemon";
import Vista from "../pages/Vista";
const { useState, useEffect } = React;
const { useContext } = React;

const VerPokemon = (props) => {
  const { pokemon } = props;

  //debugger;
  console.log(pokemon.name);

  const verVista = () => {
    //debugger;
    return <Vista pokemon={pokemon} />;
  };

  return (
    //Para pasar props con routing se tiene que usar el state y luego en el componente que lo recibe usar el location (ver page Vista.jsx)
    <NavLink to={{ pathname: "/Pokemon" }} state={{ pokemon: pokemon }}>
      <button>VER</button>
    </NavLink>
  );
};

export default VerPokemon;
