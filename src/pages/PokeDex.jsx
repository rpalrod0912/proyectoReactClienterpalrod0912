import React from "react";
import { Link, NavLink } from "react-router-dom";
import { getPokemonData, getPokemons } from "../api";
import Pokedex from "../components/Pokedex";

const { useState, useEffect } = React;

const PokeDex = () => {
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      console.log(data.results);
      const arrPromesas = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(arrPromesas);
      setPokemons(results);
      console.log(results);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <main>
      <Pokedex pokemons={pokemons} />
    </main>
  );
};

export default PokeDex;
