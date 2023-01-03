import React from "react";
import { Link, NavLink } from "react-router-dom";

import iconRegistro from "../images/IconoRegistro.png";

const Login = () => {
  return (
    <main>
      <section className="login">
        <h1>INICIAR SESIÓN</h1>
        <form action="" method="post">
          <label>Usuario</label>
          <input type="text" maxlength="20" />
          <label>Contraseña</label>
          <input type="text" maxlength="20" />
          <label className="check">
            <input type="checkbox" />
            Recordar mi contraseña
          </label>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <button className="logbtn">
                <p>INICIAR SESIÓN</p>
              </button>
            </Link>
          </div>
        </form>

        <p>¿No tienes una cuenta? ¡Regístrate Ahora!</p>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <button>
            <p>REGISTRARME</p>
          </button>
        </Link>
        <img src={iconRegistro} className="pikachuLogin" />
      </section>
    </main>
  );
};

export default Login;
