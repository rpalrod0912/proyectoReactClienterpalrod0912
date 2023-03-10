import React from "react";
import LikeContext from "../contexts/likeContext";
import { Link, NavLink } from "react-router-dom";
import VerPokemon from "./VerPokemon";
import Vista from "../pages/Vista";

const { useContext } = React;

// Componente puro , solo muestra info
const Pokemon = (props) => {
  const { pokemon, verPokemon } = props;
  //console.log(pokemon);
  const { likedPokemons, updateLikedPokemons } = useContext(LikeContext);

  const redHeart = "❤️";
  const blackHeart = "🖤";
  //debugger;
  const liked =
    likedPokemons.map((o) => o.name).indexOf(pokemon.name) >= 0
      ? redHeart
      : blackHeart;

  console.log(liked);
  const meGusta = (e) => {
    e.preventDefault();
    updateLikedPokemons(pokemon);
  };

  return (
    <div class="cardPkm">
      <NavLink to={{ pathname: "/Pokemon" }} state={{ pokemon: pokemon }}>
        <div class="circle">
          <a>
            <img
              class="dex1"
              src={
                pokemon.sprites.other.dream_world.front_default !== null
                  ? pokemon.sprites.other.dream_world.front_default
                  : pokemon.sprites.front_default
              }
              alt={pokemon.name}
            />
          </a>
        </div>
      </NavLink>
      <p> Nº {pokemon.id}</p>
      <h3>{pokemon.name}</h3>
      <button
        className="nav"
        style={{
          color: "#fff",
          backgroundColor: "white",
          border: "10px solid white",
        }}
        onClick={meGusta}
      >
        <p>{liked}</p>
      </button>
      <VerPokemon pokemon={pokemon} />
    </div>
  );
};

export default Pokemon;
