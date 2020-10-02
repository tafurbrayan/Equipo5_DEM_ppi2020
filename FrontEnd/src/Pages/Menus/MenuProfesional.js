import React from "react";
import CMenu from "../../Components/CMenu";

export default function MenuProfesional() {
  return (
    <div>
      <CMenu />
      <button id="bot6" type="button" class="btn btn-info">
        Estudiantes por contactar
      </button>

      <button id="bot7" type="button" class="btn btn-info">
        Estudiantes contactados
      </button>
      <button id="bot8" type="button" class="btn btn-info">
        <a id="qsrp" href="RProfesional">
          ¿Qué significan los resultados?
        </a>
      </button>
    </div>
  );
}
