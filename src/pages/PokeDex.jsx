import React from "react";
import { Link, NavLink } from "react-router-dom";
import { getPokemonData, getPokemons } from "../api";
import Pokedex from "../components/Pokedex";
import Paginacion from "../components/Paginacion";

const { useState, useEffect } = React;

const PokeDex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [carga, setCarga] = useState(true);
  const fetchPokemons = async () => {
    try {
      setCarga(true);
      const data = await getPokemons(25, 25 * page);
      //console.log(data.results);
      const arrPromesas = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(arrPromesas);
      setPokemons(results);
      setCarga(false);
      setTotal(Math.ceil(data.count / 25));
      console.log(results);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);
  return (
    <main>
      {carga ? (
        <div>Cargando Pokemons...</div>
      ) : (
        <Pokedex
          carga={carga}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        />
      )}
    </main>
  );
};

export default PokeDex;
