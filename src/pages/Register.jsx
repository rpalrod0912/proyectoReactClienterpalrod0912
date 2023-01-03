import React from "react";
import { Link, NavLink } from "react-router-dom";

import imgRegistro from "../images/Registro.png";

const Register = () => {
  return (
    <main>
      <section className="register">
        <h1>REGISTRO</h1>
        <form action="" method="post">
          <div className="contenedor">
            <label>Usuario</label>
            <input type="text" maxlength="20" />
            <label>Contraseña</label>
            <input type="text" maxlength="20" />
            <label>Correo</label>
            <input type="text" maxlength="50" />
            <label>Fecha</label>
            <input type="date" />
          </div>
          <label className="correo">
            <input type="checkbox" />
            Quiero recibir noticias en mi correo electrónico
          </label>
          <label className="condiciones">
            <input type="checkbox" />
            Acepto los términos y condiciones
          </label>
          <Link to="/">
            <button className="signUp">REGISTRARME</button>
          </Link>
          <img className="imgReg" src={imgRegistro} />
        </form>
      </section>
    </main>
  );
};

export default Register;
