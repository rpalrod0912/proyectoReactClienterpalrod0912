export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};
export const getPokemons = async (limit = 1154, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    //debugger;
    //console.log(data);
    return data;
  } catch (err) {}
};

//La api proporciona el pokemon y una url, por loq eu debemo extraer los datos manualmente de cada pokemon desde la url
export const getPokemonData = async (url) => {
  try {
    debugger;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getPokemons2 = async (url) => {
  try {
    let url = `https://pokeapi.co/api/v2/generation/2/`;
    const response = await fetch(url);
    const data = await response.json();
    //debugger;
    //console.log(data);
    return data;
  } catch (err) {}
};

export const getDescription = async (id) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
    const response = await fetch(url);
    const data = await response.json();
    //debugger;
    //console.log(data);
    debugger;
    const myData = data.Object;
    return data;
  } catch (err) {}
};
