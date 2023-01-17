import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  getDescription,
  getPokemonData,
  getTypeFilteredPkmn,
  getPokemons,
  searchPokemon,
  getRegionFilteredPkmn,
  getPokemonDataByName,
  getPokemonDataByForm,
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

const PokeDex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [carga, setCarga] = useState(true);
  const [like, setLike] = useState([]);
  const [noExiste, setNoExiste] = useState(false);
  const [buscando, setBuscando] = useState(false);
  const [tipo, setTipo] = useState("");
  const [filtro, setFiltro] = useState(false);
  const [valorFiltro, setValorFiltro] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("");

  const fetchPokemons = async () => {
    try {
      setCarga(true);
      setTipo("NACIONAL");
      console.log(tipoFiltro);
      if (filtro === true) {
        debugger;
        setTipo("PERSONALIZADA");
        if (tipoFiltro === "submit") {
          const data = await getTypeFilteredPkmn(valorFiltro);
          debugger;
          const arrPromesas = data.pokemon.map(async (pokemon) => {
            return await getPokemonDataByName(pokemon.pokemon.name);
          });
          const pokemon1 = console.log(data.pokemon[0].pokemon.url);
          const results = await Promise.all(arrPromesas);
          setPokemons(results);
          setCarga(false);
          setTotal(Math.ceil(data.pokemon.length / 25));
          setNoExiste(false);
        } else if (tipoFiltro === "radio") {
          const data = await getRegionFilteredPkmn(valorFiltro);
          debugger;
          console.log(data.pokemon_species[0].name);

          const arrPromesas = data.pokemon_species.map(async (pokemon) => {
            return await getPokemonDataByName(pokemon.url.split("/").at(-2));
          });
          debugger;
          const results = await Promise.all(arrPromesas);
          console.log(results);
          setPokemons(results);
          setCarga(false);
          setTotal(Math.ceil(data.pokemon.length / 25));
          setNoExiste(false);
        }
      } else {
        const data = await getPokemons(25, 25 * page);
        //debugger;
        debugger;
        /*
        console.log(like);
        console.log(data);
        console.log(data.results);*/
        const arrPromesas = data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url);
        });
        const results = await Promise.all(arrPromesas);
        setPokemons(results);
        setCarga(false);
        setTotal(Math.ceil(data.count / 25));
        setNoExiste(false);
        console.log(results);
      }
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
    debugger;
    fetchPokemons();
  }, [filtro, valorFiltro, tipoFiltro]);

  useEffect(() => {
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

    debugger;
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
        <>
          {!filtro ? (
            <main>
              <Pokedex
                carga={carga}
                pokemons={pokemons}
                page={page}
                setPage={setPage}
                total={total}
                tipo={tipo}
                filtro={filtro}
                setFiltro={setFiltro}
                valorFiltro={valorFiltro}
                setValorFiltro={setValorFiltro}
                tipoFiltro={tipoFiltro}
                setTipoFiltro={setTipoFiltro}
              />
            </main>
          ) : (
            <main>
              <Pokedex
                carga={carga}
                pokemons={pokemons}
                page={page}
                setPage={setPage}
                total={total}
                tipo={tipo}
                filtro={filtro}
                setFiltro={setFiltro}
                valorFiltro={valorFiltro}
                setValorFiltro={setValorFiltro}
                tipoFiltro={tipoFiltro}
                setTipoFiltro={setTipoFiltro}
              />
            </main>
          )}
        </>
      )}
    </LikeProvider>
  );
};

export default PokeDex;
