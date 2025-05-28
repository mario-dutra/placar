import React from "react";
import { useState } from "react";


export default function Placar() {
  const [count, setCount] = useState(0)



  function adicionar() {
    return setCount(count + 1);
  }

  function decrementa() {
    if (count <= 0) {
      return 0
    } else {
      return setCount(count - 1)
    }
  }
  return (
    <>

 
       



      <h1>{count}</h1>
      <button onClick={adicionar}>+</button> <button onClick={decrementa}>-</button>
      
    </>
  )
}