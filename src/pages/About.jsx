import React from "react";

const About = () => {
  return (
    <main>
      <section className="contact">
        <h1>CONTACTA CON NOSOTROS</h1>
        <form action="" method="post">
          <div className="grid">
            <label>Asunto:</label>
            <input type="text" maxlength="50" />
            <label>Categoría:</label>
            <input type="text" maxlength="30" />
          </div>
          <textarea cols="90" rows="20">
            Escribe algo aquí..
          </textarea>
          <button>Enviar</button>
        </form>
      </section>
    </main>
  );
};

export default About;
