import React from "react";

const busquedaContext = React.createContext({
  onSearch: (id) => null,
});

export const busquedaProvider = busquedaContext.Provider;
export default busquedaContext;
