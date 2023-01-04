import React from "react";
import { Link, NavLink } from "react-router-dom";
import { getPokemonData, getPokemons } from "../api";
import Pokedex from "../components/Pokedex";
import Paginacion from "../components/Paginacion";
import { LikeProvider } from "../contexts/likeContext";

const { useState, useEffect } = React;

const localStorageId = "liked_pokemon";

const PokeDex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [carga, setCarga] = useState(true);
  const [like, setLike] = useState([]);

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

  const cargaLikedPokemons = () => {
    //debugger;
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageId)) || [];
    setLike(pokemons);
  };

  useEffect(() => {
    console.log("Pokemons fav.....");
    cargaLikedPokemons();
  }, []);

  useEffect(() => {
    //Obtenemos todos los pKMNS
    fetchPokemons();
  }, [page]);

  const updateLikedPokemons = (name) => {
    //console.log(name);
    const actualizado = [...like];
    const isLiked = like.indexOf(name);
    if (isLiked >= 0) {
      actualizado.splice(isLiked, 1);
    } else {
      actualizado.push(name);
    }
    setLike(actualizado);
    debugger;
    window.localStorage.setItem(localStorageId, JSON.stringify(actualizado));
  };
  return (
    <LikeProvider
      value={{ likedPokemons: like, updateLikedPokemons: updateLikedPokemons }}
    >
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
    </LikeProvider>
  );
};

export default PokeDex;
