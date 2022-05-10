import React, { useState } from "react";

export default function CounterHover({ counter, plusHandler, minusHandler }) {
  //   const [counter, setCounter] = useState(0);
  //   const plusHandler = () => {
  //     setCounter((prevState) => prevState + 1);
  //   };
  //   const minusHandler = () => {
  //     setCounter((prevState) => prevState - 1);
  //   };
  return (
    <div>
      <div>{counter}</div>
      <button onMouseEnter={() => plusHandler()}>+</button>
      <button onMouseEnter={() => minusHandler()}>-</button>
    </div>
  );
}
