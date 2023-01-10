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

const { useState, useEffect } = React;

const localStorageId = "liked_pokemon";

const TeseliaDex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [carga, setCarga] = useState(true);
  const [like, setLike] = useState([]);
  const [noExiste, setNoExiste] = useState(false);
  const [buscando, setBuscando] = useState(false);
  const [tipo, setTipo] = useState("");
  const [pkmns, setPkmns] = useState(493);
  const [cantPkmns, setCantPkmns] = useState(13);

  const fetchPokemons = async () => {
    try {
      debugger;
      setTipo("JOHTO");

      setCarga(true);
      debugger;

      const data = await getPokemons(cantPkmns, pkmns);

      //console.log(data.results);
      const arrPromesas = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(arrPromesas);
      setPokemons(results);
      setCarga(false);
      setTotal(11);
      setNoExiste(false);
      console.log(results);
      console.log(pkmns);
      debugger;
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
    if (!buscando) {
      fetchPokemons();
    }
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

  const onSearch = async (pokemon) => {
    debugger;
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
            pkmns={pkmns}
            tipo={tipo}
            setPkmns={setPkmns}
            cantPkmns={cantPkmns}
            setCantPkmns={setCantPkmns}
          />
        </main>
      )}
    </LikeProvider>
  );
};

export default TeseliaDex;
