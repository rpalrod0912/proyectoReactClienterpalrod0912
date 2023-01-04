import React from "react";
import flecha from "../images/arrow-point-to-right.png";

const Paginacion = (props) => {
  //debugger;
  console.log(props);
  const { onLeftClick, onRightClick, page, totalPages } = props;
  return (
    <div className="nav">
      <button onClick={onLeftClick}>
        <img className="izq" src={flecha} />
      </button>

      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>
        <img className="der" src={flecha} />
      </button>
    </div>
  );
};

export default Paginacion;
