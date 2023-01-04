import React from "react";
import LikeContext from "../contexts/likeContext";

const { useContext } = React;

// Componente puro , solo muestra info
const Pokemon = (props) => {
  const { pokemon } = props;
  //console.log(pokemon);
  const { likedPokemons, updateLikedPokemons } = useContext(LikeContext);

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const liked = likedPokemons.includes(pokemon.name) ? redHeart : blackHeart;
  const meGusta = (e) => {
    e.preventDefault();
    updateLikedPokemons(pokemon.name);
  };

  return (
    <div class="cardPkm">
      <div class="circle">
        <a>
          <img
            class="dex1"
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
        </a>
      </div>
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
    </div>
  );
};

export default Pokemon;
