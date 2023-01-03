import React from "react";

// Componente puro , solo muestra info
const Pokemon = (props) => {
  const { pokemon } = props;
  console.log(pokemon);

  return (
    <div class="cardPkm">
      <div class="circle">
        <a>
          <img
            class="dex1"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </a>
      </div>
      <p> Nº {pokemon.id}</p>
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default Pokemon;
