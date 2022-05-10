import React, { useState } from "react";

export default function CounterClick({counter, plusHandler, minusHandler}) {
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
      <button onClick={() => plusHandler()}>+</button>
      <button onClick={() => minusHandler()}>-</button>
    </div>
  );
}
