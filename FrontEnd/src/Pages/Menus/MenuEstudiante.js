import React, { Component } from "react";
import CMenu from "../../Components/CMenu";



export default function MenuEstudiante() {
  return (
    <div>
      <CMenu />
      <button id="bot6" type="button" class="btn btn-info">
       Test
      </button>

      <button id="bot7" type="button" class="btn btn-info">
       
       <a id="qt" href="QueEsUnTest">¿Qué es un test?</a>
      </button>
      <button id="bot8" type="button" class="btn btn-info">
          
          <a id="qsr" href="REstudiante">¿Qué significan los resultados?</a>
        </button>
       
    </div>
  );
}