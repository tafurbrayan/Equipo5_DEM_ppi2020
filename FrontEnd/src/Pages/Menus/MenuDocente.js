import React from "react";
import CMenu from "../../Components/CMenu";


export default function MenuDocente() {
  return (
    <div>
      <CMenu />
      <button id="bot6" type="button" class="btn btn-info">
       Estudiantes que faltan por realizar el test
      </button>

      <button id="bot7" type="button" class="btn btn-info">
       Estudiantes que realizaron el test
      </button>
      <button id="bot8" type="button" class="btn btn-info">
          
          <a href="RDocente">¿Qué significan los resultados?</a>
        </button>
       
    </div>
  );
}
