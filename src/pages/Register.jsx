import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgRegistro from "../images/Registro.png";
import axios from "../api/axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const MAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const DATE_REGEX =
  /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
const REGISTER_URL = "/register";
//const fs = global.require("fs");

const localStorageId = "registered_users";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);

  const [date, setDate] = useState("");
  const [validDate, setValidDate] = useState(false);
  const [dateFocus, setDateFocus] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [exito, setExito] = useState(false);

  const [users, setUsers] = useState([]);

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
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    const result = DATE_REGEX.test(date);
    console.log(result);
    console.log(date);
    setValidDate(result);
  }, [date]);

  useEffect(() => {
    setErrMsg("");
  }, [user, mail, pwd, date, matchPwd]);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  const handleSubmit = (e) => {
    debugger;
    const userData = {
      nombre: user,
      contraseña: pwd,
      mail: mail,
    };
    debugger;
    setUsers(JSON.parse(window.localStorage.getItem(localStorageId)));
    users.push(userData);
    e.preventDefault();
    window.localStorage.setItem(localStorageId, JSON.stringify(users));
    //Si se intenta habilitar el boton submit por maneras externas con los campos incorrectos
    //Lo volvemos a comprobar para prevenir que se introduzcan campos incorrectos
    const usuario = USER_REGEX.test(user);
    const contra = PWD_REGEX.test(pwd);
    debugger;
    if (!usuario || !contra) {
      setErrMsg("Entrada Inválida");
      return;
    }
    console.log(user, pwd);
    setExito(true);
  };
  return (
    <main>
      {exito ? (
        <section className="register">
          <h1>REGISTRO</h1>
          <form>
            <Link to="/Login" style={{ textDecoration: "none" }}>
              <h1>Registro con exito</h1>
              <button className="signUp">INICIAR SESION</button>
            </Link>
          </form>
        </section>
      ) : (
        <section className="register">
          <h1>REGISTRO</h1>
          <p
            id="uidnote"
            className={
              userFocus && user && !validName ? "instructions" : "offscreen"
            }
            style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
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
            style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
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

          <p
            id="pwdnote"
            className={mailFocus && !validMail ? "instructions" : "offscreen"}
            style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
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
            className={dateFocus && !validDate ? "instructions" : "offscreen"}
            style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Por favor Introduce una fecha correcta
            <br />
          </p>
          <p
            id="confirmnote"
            className={matchFocus && !validMatch ? "instructions" : "offscreen"}
            style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Las contraseñas no coinciden.
          </p>

          <form onSubmit={handleSubmit}>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>

            <div className="contenedor">
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

              <label htmlFor="confirm_pwd">
                Repetir Contraseña
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validMatch && matchPwd ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validMatch || !matchPwd ? "hide" : "invalid"}
                />
              </label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                maxlength="20"
              />

              <label htmlFor="date">
                Correo
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
                value={mail}
                required
                aria-invalid={validMail ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setMailFocus(true)}
                onBlur={() => setMailFocus(false)}
              />

              <label htmlFor="Fecha">
                Fecha
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validDate ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validDate || !Date ? "hide" : "invalid"}
                />
              </label>
              <input
                type="date"
                id="date"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
                aria-invalid={validDate ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setDateFocus(true)}
                onBlur={() => setDateFocus(false)}
              />
            </div>
            <label className="correo">
              <input type="checkbox" />
              Quiero recibir noticias en mi correo electrónico
            </label>
            <label className="condiciones">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}
              />
              Acepto los términos y condiciones
            </label>
            <p
              id="pwdnote"
              className={!isChecked ? "instructions" : "offscreen"}
              style={{
                display: "flex",
                margin: "0 auto",
                marginBottom: "2rem",
              }}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Desbes Aceptar los terminos y condiciones para registrarte
              <br />
            </p>

            <button
              className="signUp"
              disabled={
                !validName ||
                !validPwd ||
                !validMatch ||
                !validMail ||
                !validDate ||
                !isChecked
                  ? true
                  : false
              }
            >
              REGISTRARME
            </button>

            <img className="imgReg" src={imgRegistro} />
          </form>
        </section>
      )}
    </main>
  );
};

export default Register;
