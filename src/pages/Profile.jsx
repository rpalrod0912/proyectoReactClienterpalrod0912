import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../sass/views/_perfil.scss";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import defaultImg from "../images/profileUser.png";
//debugger;
const localStorageId = "registered_users";
const data = JSON.parse(window.localStorage.getItem(localStorageId));
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const MAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Profile = () => {
  debugger;
  const [datosUsuario, setDatosUsuario] = useState(data);

  debugger;
  const loadUserData = () => {
    debugger;

    console.log(data);
    setDatosUsuario(data);
  };
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [exito, setExito] = useState(false);

  useEffect(() => {
    loadUserData;
  }, []);
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
    const result = MAIL_REGEX.test(mail);
    console.log(result);
    console.log(mail);
    setValidMail(result);
  }, [mail]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, mail, pwd]);

  const handleChanges = (e) => {
    e.preventDefault();

    setExito(true);
    setTimeout(() => {
      setExito(false);
    }, 3000);
  };

  console.log(datosUsuario);
  return (
    <>
      <main class="bdy">
        <section class="prfBody">
          <div class="nav">
            <h1>Mi Perfil</h1>
          </div>

          <article class="userPrf">
            <div class="userPreset">
              <div class="circleUser">
                <img src={defaultImg} />
              </div>
              <div class="etiquetas">
                <p>Experiencia:</p>
                <p class="exp">PRO</p>
              </div>
            </div>
            <div class="info">
              <h1>{datosUsuario[0].nombre}</h1>
              <p>Tu Descripción:</p>
              <p>Descripción de ejemplo......</p>
            </div>
          </article>
          <article class="userData">
            <form class="userForm" onSubmit={handleChanges}>
              <p>TUS DATOS</p>
              <div>
                <label htmlFor="username">
                  Nombre De usuario:
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
                  placeholder={datosUsuario[0].nombre}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                <label>
                  Contraseña:
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
                  type="text"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  placeholder={"*".repeat(datosUsuario[0].contraseña.length)}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <label>
                  Correo Electrónico:
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validMail ? "valid" : "hide"}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={validMail || !mail ? "hide" : "invalid"}
                  />
                </label>
                <input
                  type="text"
                  id="mail"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setMail(e.target.value)}
                  placeholder={datosUsuario[0].mail}
                  required
                  aria-invalid={validMail ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setMailFocus(true)}
                  onBlur={() => setMailFocus(false)}
                />
                <label>Imagen:</label>
                <input type="file" />
              </div>
              <button
                disabled={!validName || !validPwd || !validMail ? true : false}
              >
                GUARDAR CAMBIOS
              </button>
            </form>
          </article>
        </section>
        <p
          id="uidnote"
          className={
            userFocus && user && !validName ? "instructions" : "offscreen"
          }
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 3,
            marginBottom: "2rem",
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
          className={mailFocus && !validMail ? "instructions" : "offscreen"}
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 3,
            marginBottom: "2rem",
            marginTop: "1rem",
          }}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Debe contener un @
          <br />
          Debe contener una extension . al final
          <br />
          Ejemplo micorreo@gmail.com
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
        <>{exito ? <h1>Cambios Guardados</h1> : <></>}</>
      </main>
    </>
  );
};

export default Profile;
