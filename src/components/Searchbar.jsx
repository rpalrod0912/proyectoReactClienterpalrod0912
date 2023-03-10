import React from "react";
import { useState } from "react";
import busqueda from "../images/Logo Busqueda.png";
import { searchPokemon } from "../api";
const { useContext } = React;

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    debugger;
    onSearch(search);
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Verga");
    }
  };

  return (
    <div className="search">
      <input
        type="input"
        placeholder={search}
        className="searchBar"
        maxlength="40"
      />
      <button className="buttonSearch" onClick={onClick}>
        <img className="logo-busq" src={busqueda} />
      </button>
    </div>
  );
};

export default Searchbar;
