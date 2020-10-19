import React, { Component } from "react";
import CMenu from "../../Components/CMenu";
import Ciudad from "../../Imagenes/img/Men_u.png";
export default function MenuEstudiante() {
  return (
    <div id="Fondo_1" style={{ backgroundImage: `url(${Ciudad})` }}>
          <div class="container-fluid h-100">
    <div class="row justify-content-center h-100">
        <div class="col-sm-8 align-self-center text-center">
          
        <div  className="form-group col text-center">
      <CMenu />
      <div class="btn-group-vertical">
  
      <button id="botle2" type="button" class="btn btn-info">
        <a id="bd" href="primeraPregunta">
          Test
        </a>
     
      </button>

      <button id="botlp2" type="button" className="btn btn-info .text-nowrap ">
        <a id="qt" href="QueEsUnTest">
          ¿Qué es un test?
        </a>
      </button>
      <button id="botld2" type="button" className="btn btn-info .text-nowrap">
        <a id="qsr" href="REstudiante">
          ¿Qué significan los resultados?
        </a>
      </button>

            <button id="bot99" type="button" className="btn btn-primary .text-nowrap">
            <a href="Logins">
              Cerrar Sesión
              </a>
            </button>
          
      
      </div>
    </div>
    
    </div>
    </div>
    </div>
    </div>
  );
}
