import React from "react";
import { Link, NavLink } from "react-router-dom";
import menuIcon from "../images/menuIcon.png";
import recortado from "../images/pokemonRecortado.png";
import busqueda from "../images/Logo Busqueda.png";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <header>
      <NavLink to="/">
        <img src={recortado} className="logo" />
      </NavLink>

      <Searchbar />
      <nav className="menuHTML">
        <label for="menu-toggle">
          <div className="botonMenu">
            <img className="imgMenu" src={menuIcon} />
          </div>
        </label>

        <input type="checkbox" id="menu-toggle" />

        <ul id="trickMenu">
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>

          <li>
            <NavLink to="/PokeDex">Dex</NavLink>
          </li>

          <li>
            <NavLink to="/profile">Mi Perfil</NavLink>
          </li>
          <li>
            <NavLink to="/Favoritos">Favoritos</NavLink>
          </li>

          <li>
            <NavLink to="/error">Error</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
