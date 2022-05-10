import React, { useState } from "react";

export default function Counter({ render }) {
  const [counter, setCounter] = useState(0);
  const plusHandler = () => {
    setCounter((prevState) => prevState + 1);
  };
  const minusHandler = () => {
    setCounter((prevState) => prevState - 1);
  };
  return <div>{render(counter , plusHandler , minusHandler)}</div>;
}
