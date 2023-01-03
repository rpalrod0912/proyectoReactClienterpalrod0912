import React from "react";
import { useState } from "react";
import busqueda from "../images/Logo Busqueda.png";
import { searchPokemon } from "../api";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <div className="search">
      <input
        type="input"
        placeholder={search}
        className="searchBar"
        maxlength="40"
        onChange={onChange}
      />
      <button className="buttonSearch" onClick={onClick}>
        <img className="logo-busq" src={busqueda} />
      </button>
      <div>{pokemon && <div>{pokemon.name}</div>}</div>
    </div>
  );
};

export default Searchbar;
