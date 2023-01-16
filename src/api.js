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
    //debugger;
    const data = await response.json();
    console.log(data);
    //debugger;
    //console.log(data);
    return data;
  } catch (err) {}
};

//La api proporciona el pokemon y una url, por loq eu debemo extraer los datos manualmente de cada pokemon desde la url
export const getPokemonData = async (url) => {
  try {
    //debugger;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};
export const getPokemonDataByName = async (name) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    //debugger;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getTypeFilteredPkmn = async (tipo) => {
  try {
    //debugger;
    let url = `https://pokeapi.co/api/v2/type/${tipo}`;
    const response = await fetch(url);
    //debugger;
    const data = await response.json();
    console.log(data);
    //debugger;
    //console.log(data);
    return data;
  } catch (err) {}
};

export const getRegionFilteredPkmn = async (numero) => {
  try {
    //debugger;
    let url = `https://pokeapi.co/api/v2/generation/${numero}`;
    const response = await fetch(url);
    //debugger;
    const data = await response.json();
    console.log(data);
    //debugger;
    //console.log(data);
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

export const getJohtoPokemons = async (limit = 1154, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    debugger;
    const data = await response.json();
    console.log(data);
    //debugger;
    //console.log(data);
    return data;
  } catch (err) {}
};

export const getDescription = async (id) => {
  try {
    debugger;
    let url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
    const response = await fetch(url);
    const data = await response.json();
    //debugger;
    //console.log(data);
    return data;
  } catch (err) {}
};
