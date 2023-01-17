import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LENGTH_REGEX = /[0-9a-zA-Z]{6,}/;

const About = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [asunto, setAsunto] = useState("");
  const [validAsunto, setValidAsunto] = useState(false);
  const [asuntoFocus, setAsuntoFocus] = useState(false);

  const [cat, setCat] = useState("");
  const [validCat, setValidCat] = useState(false);
  const [catFocus, setCatFocus] = useState(false);

  const [text, setText] = useState("");
  const [validText, setValidText] = useState(false);
  const [textFocus, setTextFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [exito, setExito] = useState(false);

  useEffect(() => {
    const result = LENGTH_REGEX.test(asunto);
    console.log(result);
    console.log(asunto);
    setValidAsunto(result);
  }, [asunto]);

  useEffect(() => {
    const result = LENGTH_REGEX.test(cat);
    console.log(result);
    console.log(cat);
    setValidCat(result);
  }, [cat]);

  useEffect(() => {
    const result = LENGTH_REGEX.test(text);
    console.log(result);
    console.log(text);
    setValidText(result);
  }, [text]);

  useEffect(() => {
    setErrMsg("");
  }, [asunto, cat, text]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setExito(true);
    setTimeout(() => {
      setExito(false);
    }, 3000);
  };
  return (
    <main>
      <section className="contact">
        <h1>CONTACTA CON NOSOTROS</h1>
        <p
          id="uidnote"
          className={
            asuntoFocus && asunto && !validAsunto ? "instructions" : "offscreen"
          }
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
        >
          <FontAwesomeIcon icon={faInfoCircle} />6 Carácteres de longitud
          minimos
        </p>
        <p
          id="uidnote"
          className={
            catFocus && cat && !validCat ? "instructions" : "offscreen"
          }
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
        >
          <FontAwesomeIcon icon={faInfoCircle} />6 Carácteres de longitud
          minimos
        </p>
        <p
          id="uidnote"
          className={
            textFocus && text && !validText ? "instructions" : "offscreen"
          }
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
        >
          <FontAwesomeIcon icon={faInfoCircle} />6 Carácteres de longitud
          minimos
        </p>
        <form onSubmit={handleSubmit} method="post">
          <div className="grid">
            <label htmlFor="asunto">
              Asunto:
              <span>
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validAsunto ? "valid" : "hide"}
                />
              </span>
              <span>
                {" "}
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validAsunto || !asunto ? "hide" : "invalid"}
                />
              </span>
            </label>
            <input
              type="text"
              id="asunto"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setAsunto(e.target.value)}
              required
              aria-invalid={validAsunto ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <label htmlFor="cat">
              Categoría:
              <span>
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validCat ? "valid" : "hide"}
                />
              </span>
              <span>
                {" "}
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validCat || !cat ? "hide" : "invalid"}
                />
              </span>
            </label>
            <input
              type="text"
              id="cat"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setCat(e.target.value)}
              required
              aria-invalid={validCat ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
          </div>
          <textarea cols="90" rows="20">
            Escribe algo aquí..
          </textarea>
          <button disabled={!validAsunto || !validCat ? true : false}>
            Enviar
          </button>
        </form>
        <>{exito ? <h1>Gracias Por Contactar con Nosotros!</h1> : <></>}</>
      </section>
    </main>
  );
};

export default About;
