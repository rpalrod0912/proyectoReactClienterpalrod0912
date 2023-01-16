import React from "react";
import { Link, NavLink } from "react-router-dom";

import defaultImg from "../images/profileUser.png";
//debugger;
const Profile = () => {
  return (
    <>
      <main className="bdy">
        <section className="prfBody">
          <div className="nav">
            <h1>Mi Perfil</h1>
          </div>
        </section>

        <article className="userPrf">
          <div className="userPreset">
            <div className="circleUser">
              <img src={defaultImg} />
            </div>
            <div className="etiquetas">
              <p>Experiencia:</p>
              <p className="exp">PRO</p>
            </div>
          </div>
          <div className="info">
            <h1>Rafael0001</h1>
            <p>Tu Descripción:</p>
            <p>
              Soy jugador de Pokémon desde los 7 años y tengo mucha experiencia
              en juegos de la marca....
            </p>
          </div>
        </article>
        <article className="userData">
          <form className="userForm">
            <p>TUS DATOS</p>
            <div>
              <label>Nombre De usuario:</label>
              <input type="text" maxlength="50" placeholder="Rafa001" />
              <label>Nombre:</label>
              <input type="text" maxlength="30" placeholder="Rafael" />
              <label>Apellidos:</label>
              <input
                type="text"
                maxlength="30"
                placeholder="Palomino Rodríguez"
              />
              <label>Correo Electrónico:</label>
              <input
                type="text"
                maxlength="30"
                placeholder="rpalrod0912@g.educaand.es"
              />
              <label>Imagen:</label>
              <input type="file" />
            </div>
            <button>GUARDAR CAMBIOS</button>
          </form>
        </article>
      </main>
    </>
  );
};

export default Profile;
