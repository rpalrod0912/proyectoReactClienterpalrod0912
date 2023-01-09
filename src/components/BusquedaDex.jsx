import React from "react";
import { useState } from "react";
import busqueda from "../images/Logo Busqueda.png";
import { searchPokemon } from "../api";
import busquedaContext from "../contexts/searchContext";
const { useContext } = React;

const BusquedaDex = (props) => {
  const { onSearch } = props;

  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    debugger;
    onSearch(search);
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <div className="busqueda">
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
    </div>
  );
};

export default BusquedaDex;
