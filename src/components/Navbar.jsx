import React from "react";
import { Link, NavLink } from "react-router-dom";
import menuIcon from "../images/menuIcon.png";
import recortado from "../images/pokemonRecortado.png";
import busqueda from "../images/Logo Busqueda.png";
import Searchbar from "./Searchbar";
import { useUserContext } from "../contexts/userContext";

const Navbar = () => {
  const { usuario, setUsuario } = useUserContext();

  return (
    <header>
      <NavLink to="/">
        <img src={recortado} className="logo" />
      </NavLink>

      <nav className="menuHTML">
        <>
          {!usuario ? (
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>
          ) : (
            <>
              <label for="menu-toggle">
                <div className="botonMenu">
                  <img className="imgMenu" src={menuIcon} />
                </div>
              </label>
              <input type="checkbox" id="menu-toggle" />

              <ul id="trickMenu">
                <li>
                  <button
                    onClick={() => {
                      setUsuario(false);
                    }}
                  >
                    <p>Desconectar</p>
                  </button>
                </li>

                <li>
                  <NavLink to="/Inicio/PokeDex">Dex</NavLink>
                </li>

                <li>
                  <NavLink to="/Inicio/profile">Mi Perfil</NavLink>
                </li>
                <li>
                  <NavLink to="/Inicio/Favoritos">Favoritos</NavLink>
                </li>
              </ul>
            </>
          )}
        </>
      </nav>
    </header>
  );
};

export default Navbar;
