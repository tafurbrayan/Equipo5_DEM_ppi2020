import React from "react";
import ResultadoGlobal from "../../Components/ResultadoGlobal"
import FFLECHATRAS from "../../Imagenes/img/FFLECHATRAS.png";
export default function RDocente() {
  return (
    <div>
      <ResultadoGlobal />
      <a href="MenuDocente">
          <img className="fcu" src={FFLECHATRAS} />
        </a>
      
    </div>
  );
}