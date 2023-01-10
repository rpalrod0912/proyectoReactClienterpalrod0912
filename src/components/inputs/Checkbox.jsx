import React from "react";
import { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };
  return (
    <label className="condiciones">
      <input type="checkbox" onChange={handleOnChange} />
      Acepto los términos y condiciones
    </label>
  );
};

export default Checkbox;
