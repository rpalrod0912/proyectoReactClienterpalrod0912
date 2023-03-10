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

const Favoritos = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [carga, setCarga] = useState(true);
  const [like, setLike] = useState([]);
  const [noExiste, setNoExiste] = useState(false);
  const [buscando, setBuscando] = useState(false);
  const [tipo, setTipo] = useState("");
  const [vacio, setVacio] = useState(true);
  const [sinPokemon, setSinPokemons] = useState(true);

  debugger;
  const fetchPokemons = async () => {
    try {
      setVacio(true);
      setCarga(true);
      setTipo("FAVORITOS");
      debugger;
      const data = JSON.parse(
        window.localStorage.getItem(localStorageId) || []
      );
      debugger;
      console.log(data);
      if (data.length === 0) {
        setVacio(false);
        set;
      }
      const results = await Promise.all(data);
      setPokemons(results);
      setCarga(false);
      setTotal(Math.ceil(2));
      setNoExiste(false);
      console.log(results);
    } catch (err) {}
  };

  const comprobarLocalStorage = () => {
    if (window.localStorage.getItem(localStorageId) === null) {
      window.localStorage.setItem(localStorageId, JSON.stringify([]));
    }
  };

  const cargaLikedPokemons = () => {
    //debugger;
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageId)) || [];
    setLike(pokemons);
    console.log(like);
  };

  useEffect(() => {
    comprobarLocalStorage();
  });

  useEffect(() => {
    cargaLikedPokemons();
  }, []);

  useEffect(() => {
    if (!buscando) {
      fetchPokemons();
    }
    //Obtenemos todos los pKMNS
    fetchPokemons();
  }, []);

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
    fetchPokemons();
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
      setVacio(true);
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
      {noExiste ? (
        <NoExiste></NoExiste>
      ) : (
        <main>
          {!vacio ? (
            <section className="register">
              <h1>NO TIENES POKEMON FAVORITOS</h1>
              <form>
                <Link to="/PokeDex" style={{ textDecoration: "none" }}>
                  <h1>??A??ade Favoritos Ahora! </h1>
                  <button className="signUp">Acceder A la P??KEDEX</button>
                </Link>
              </form>
            </section>
          ) : (
            <Pokedex
              tipo={tipo}
              carga={carga}
              pokemons={pokemons}
              page={page}
              setPage={setPage}
              total={total}
            />
          )}
        </main>
      )}
    </LikeProvider>
  );
};

export default Favoritos;
