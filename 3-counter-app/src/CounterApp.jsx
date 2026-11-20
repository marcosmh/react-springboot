import { useState } from "react";


export const CounterApp = () => {

  const [counter, setCounter] = useState(0);

  const contadorIncrement = () => {
    setCounter( c => c + 1);
  }

  return (
    <>
      <h2>El valor del contador es { counter } </h2>
      <button onClick={ () => contadorIncrement() } >Incrementar Contador +1</button>
    </>
  );
}