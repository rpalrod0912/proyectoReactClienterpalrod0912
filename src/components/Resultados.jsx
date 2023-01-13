import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  getDescription,
  getPokemonData,
  getPokemons,
  searchPokemon,
} from "../api";
import Pokedex from "../components/Pokedex";
import Paginacion from "../components/Paginacion";
import { LikeProvider } from "../contexts/likeContext";
import Searchbar from "../components/Searchbar";
import Navbar from "../components/Navbar";
import BusquedaDex from "../components/BusquedaDex";
import NoExiste from "../components/NoExiste";

const { useState, useEffect } = React;

const localStorageId = "liked_pokemon";

const Resultados = (props) => {
  const {
    tipo,
    setTipo,
    pkmns,
    setPkmns,
    cantPkmns,
    setCantPkmns,
    total,
    setTotal,
    page,
    setPage,
  } = props;
  const [pokemons, setPokemons] = useState([]);
  const [carga, setCarga] = useState(true);
  const [like, setLike] = useState([]);
  const [noExiste, setNoExiste] = useState(false);
  const [buscando, setBuscando] = useState(false);

  const fetchPokemons = async () => {
    try {
      setCarga(true);
      setTipo("NACIONAL");
      const data = await getPokemons(cantPkmns, pkmns);
      //debugger;
      console.log(like);
      console.log(data);
      console.log(data.results);
      const arrPromesas = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(arrPromesas);
      setPokemons(results);

      setCarga(false);
      setTotal(total);
      setNoExiste(false);
      console.log(results);
    } catch (err) {}
  };

  const cargaLikedPokemons = () => {
    //debugger;
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageId)) || [];
    setLike(pokemons);
    console.log(like);
  };

  useEffect(() => {
    cargaLikedPokemons();
  }, []);

  useEffect(() => {
    if (!buscando) {
      fetchPokemons();
    }
    //Obtenemos todos los pKMNS
    fetchPokemons();
  }, [page]);

  const updateLikedPokemons = (pokemon) => {
    //console.log(name);
    const actualizado = [...like];
    //debugger;
    const isLiked = like.map((o) => o.name).indexOf(pokemon.name);
    if (isLiked >= 0) {
      actualizado.splice(isLiked, 1);
    } else {
      actualizado.push(pokemon);
    }
    setLike(actualizado);

    window.localStorage.setItem(localStorageId, JSON.stringify(actualizado));
  };

  const onSearch = async (pokemon) => {
    //debugger;
    if (!pokemon) {
      return fetchPokemons();
    }
    setCarga(true);
    setBuscando(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNoExiste(true);
      setCarga(false);
      return;
    } else {
      setNoExiste(false);
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setCarga(false);
    setBuscando(false);
  };
  debugger;
  console.log(like);
  return (
    <LikeProvider
      value={{ likedPokemons: like, updateLikedPokemons: updateLikedPokemons }}
    >
      <BusquedaDex onSearch={onSearch} />
      {noExiste ? (
        <NoExiste></NoExiste>
      ) : (
        <main>
          <Pokedex
            carga={carga}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
            tipo={tipo}
            pkmns={pkmns}
            setPkmns={setPkmns}
            cantPkmns={cantPkmns}
            setCantPkmns={setCantPkmns}
          />
        </main>
      )}
    </LikeProvider>
  );
};

export default Resultados;
