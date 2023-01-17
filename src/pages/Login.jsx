import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";
import iconRegistro from "../images/IconoRegistro.png";
import { useUserContext } from "../contexts/userContext";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
const LOGIN_URL = "/login";
const Login = () => {
  const userRef = useRef();
  const errREf = useRef();

  const { usuario, setUsuario } = useUserContext();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [exito, setExito] = useState(false);

  const localStorageId = "registered_users";

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    const data = JSON.parse(window.localStorage.getItem(localStorageId));
    //Si se intenta habilitar el boton submit por maneras externas con los campos incorrectos
    //Lo volvemos a comprobar para prevenir que se introduzcan campos incorrectos
    const usuario = USER_REGEX.test(user);
    const contra = PWD_REGEX.test(pwd);
    debugger;
    if (!usuario || !contra) {
      setErrMsg("Entrada Inválida");
      return;
    }
    if (data[0].nombre === user && data[0].contraseña === pwd) {
      debugger;
      setUsuario(true);
      setExito(true);
      console.log(usuario);
    }
    console.log(user, pwd);
  };

  return (
    <main>
      {exito ? (
        <section className="register">
          <h1> Bienvenido {user}, has Iniciado Sesión</h1>
          <Link to="/Inicio/Home" style={{ textDecoration: "none" }}>
            <button className="signUp">Ir A Inicio</button>
          </Link>
        </section>
      ) : (
        <section className="login">
          <h1>INICIAR SESIÓN</h1>
          <p
            id="uidnote"
            className={
              userFocus && user && !validName ? "instructions" : "offscreen"
            }
            style={{
              gridColumnStart: 1,
              gridColumnEnd: 3,
              marginBottom: "5rem",
              marginTop: "1rem",
            }}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 a 24 caracteres.
            <br />
            Debe empezar con una Letra.
            <br />
            Se permiten letras numeros y caracteres especiales.
          </p>
          <p
            id="pwdnote"
            className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            style={{
              gridColumnStart: 1,
              gridColumnEnd: 3,
              marginBottom: "2rem",
              marginTop: "1rem",
            }}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 a 24 caracteres.
            <br />
            Debe incluir Letras maysuculas y minusculas, un numero y un caracter
            especial.
            <br />
            Caracteres especiales Permitidos:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Usuario
              <span>
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validName ? "valid" : "hide"}
                />
              </span>
              <span>
                {" "}
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validName || !user ? "hide" : "invalid"}
                />
              </span>
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />

            <label htmlFor="password">
              Contraseña
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />

            <label className="check">
              <input type="checkbox" />
              Recordar mi contraseña
            </label>

            <button
              className="logbtn"
              disabled={!validName || !validPwd ? true : false}
            >
              INICIAR SESIÓN
            </button>
          </form>
          <p>
            {!validName || !validPwd ? (
              <p id="pwdnote" className="instructions">
                <FontAwesomeIcon icon={faInfoCircle} />
                Debes Rellenar Ambos campos para Iniciar Sesión
              </p>
            ) : (
              <p></p>
            )}
          </p>
          <p>¿No tienes una cuenta? ¡Regístrate Ahora!</p>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <button>
              <p>REGISTRARME</p>
            </button>
          </Link>
          <img src={iconRegistro} className="pikachuLogin" />
        </section>
      )}
    </main>
  );
};

export default Login;
