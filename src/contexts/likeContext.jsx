//SOLO se usa context para favoritos pues con contexto englobamos todos los componentes de la app
import React from "react";

const LikeContext = React.createContext({
  likedPokemons: [],
  updateLikedPokemons: (id) => null,
});

export const LikeProvider = LikeContext.Provider;

export default LikeContext;
