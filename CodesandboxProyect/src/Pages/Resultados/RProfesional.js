import React from "react";
import ResultadoGlobal from "../../Components/ResultadoGlobal"
import FFLECHATRAS from "../../Imagenes/img/FFLECHATRAS.png";
export default function RProfesional() {
  return (
    <div>
      <ResultadoGlobal />
      <a href="MenuProfesional">
          <img className="fcu" src={FFLECHATRAS} />
        </a>
      
    </div>
  );
}