import React from "react";
import ResultadoGlobal from "../../Components/ResultadoGlobal"
import FFLECHATRAS from "../../Imagenes/img/FFLECHATRAS.png";
export default function REstudiante() {
  return (
    <div>
      <ResultadoGlobal />
      <a href="MenuEstudiante">
          <img className="fcu" src={FFLECHATRAS} />
        </a>
      
    </div>
  );
}