import React from "react";
import { useState, useEffect } from "react";

const [pwd, setPwd] = useState("");
const [validPwd, setValidPwd] = useState(false);
const [pwdFocus, setPwdFocus] = useState(false);
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const PasswordInput = () => {
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);
  return (
    <>
      {" "}
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
      <p
        id="pwdnote"
        className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
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
    </>
  );
};

export default PasswordInput;
