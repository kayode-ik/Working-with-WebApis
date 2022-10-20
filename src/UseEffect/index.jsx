// import { Button } from "bootstrap";
import react, { useState } from "react";
import "./effectTest.css";

const EffectTest = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    // setNumber(number + 1);
    setNumber((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={increase}>Click Me</button>
      <h2>Increase : {number}</h2>
    </div>
  );
};

export default EffectTest;
