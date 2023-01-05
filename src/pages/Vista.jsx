import React from "react";
import { Link, NavLink } from "react-router-dom";
//use Location necesario para importar props del componente desde que se llamo, en react router v6
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

const Vista = (props) => {
  //Recibe las props routing
  const [carga, setCarga] = useState(true);
  const [filtrado, setFiltrado] = useState([]);
  const [data, setData] = useState([]);
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    try {
      setCarga(true);
      const getDescription = async (id) => {
        let url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
        const response = await fetch(url);
        const data = await response.json();
        //debugger;
        //console.log(data);
        if (typeof data === "object" /*&& data !== []*/) {
          setData(data);
          setCarga(false);
          //Filtramos el array filtered_FlavorEntries para que solo recoga textos en un idioma
          const filteredFlavorTextEntries = data.flavor_text_entries.filter(
            (element) => element.language.name === "es"
          );
          const flavorTextEntry =
            filteredFlavorTextEntries.length > 0
              ? filteredFlavorTextEntries[0]
              : {};
          //console.log(filteredFlavorTextEntries);
          //console.log(flavorTextEntry);
          //debugger;
          const flavorText = flavorTextEntry.flavor_text;
          //console.log(flavorText);
          setFiltrado(flavorText);
        }
      };
      getDescription(state.pokemon.id);
    } catch (err) {}
  }, []);

  console.log(state.pokemon);
  console.log(data);
  console.log(carga);
  debugger;
  console.log(filtrado);

  //data.flavor_text_entries[50].flavor_text
  //state.pokemon
  return (
    <main className="bdy">
      <section className="dexBdy">
        <div>
          {carga ? (
            <ColorRing
              visible={true}
              height="400"
              width="400"
              ariaLabel="blocks-loading"
              wrapperStyle={{
                display: "flex",
                margin: "0 auto",
              }}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            />
          ) : (
            <>
              <div className="nav">
                <img
                  className="izq"
                  src="assets/images/arrow-point-to-right.png"
                />
                <p>Nº {state.pokemon.id}</p>
                <img
                  className="der"
                  src="assets/images/arrow-point-to-right.png"
                />
              </div>
              <article className="pkmDex">
                <div className="pkmPreset">
                  <div className="circle">
                    <img
                      src={
                        state.pokemon.sprites.other.dream_world.front_default
                      }
                    />
                  </div>

                  <p>{data.name}</p>
                  <div className="types">
                    <p className="p1">Tipo</p>
                    <p className="p1">Debilidad</p>
                    <p className="typeElectric"></p>
                    <p className="typeGround"></p>
                  </div>
                </div>
                <div className="info">
                  <h1>{state.pokemon.name}</h1>

                  <p className="p1">{filtrado}</p>
                </div>
              </article>
              <article className="stats">
                <p>
                  Altura
                  <span className="pkData">{state.pokemon.height} </span>
                </p>
                <p>
                  Categoría
                  <span className="pkData">{data.genera[5].genus}</span>
                </p>
                <p>
                  Habilidad
                  <span className="pkData">
                    {state.pokemon.abilities[0].ability.name}
                  </span>
                </p>
                <p>
                  Peso
                  <span className="pkData">{state.pokemon.weight}</span>
                </p>
                <p>
                  Sexo
                  <span className="pkData">Masculino/Femenino</span>
                </p>
              </article>
              <h2 className="evoTitle">Evoluciones</h2>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Vista;
