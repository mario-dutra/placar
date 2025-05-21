import React from "react";
import { useState } from "react";


export default function Nomes() {


  const [nome, setNome] = useState('')

  //  const enviaNome =(event)=>{
  //  event.preventDefault();
  // }




  return (
    <>
      <form /*onSubmit={enviaNome}*/>

        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite nome " />

      </form>

      <h3>{nome}</h3>
    </>
  )

}