import React from "react";
import "../../Style/styles.css";
import Pregunta1 from "../../Imagenes/img/Pregunta1.png";

export default function primeraPregunta() {
  return (
   
       <div className="FondoP1">
        <div class="row justify-content-center ">
           <div  id="Fondo_1" style={{ backgroundImage: `url(${Pregunta1})` }}>
            <div  className="col align-self-center text-center   ">
    
  <form>
  <div  className="form-group col">
        <h1 className="TituloPreguntas">¿Te sientes orgulloso/a de la persona que eres?</h1>

        <div id="primpreg" class="form-check ">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            checked
          />
          <label class="form-check-label" for="exampleRadios1">
            Casi nunca
          </label>
        </div>
        <div id="segpreg" class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label class="form-check-label" for="exampleRadios2">
            Pocas veces
          </label>
        </div>
        <div id="terpreg" class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios3"
            value="option3"
            cheked
          />
          <label class="form-check-label" for="exampleRadios3">
            A veces
          </label>
        </div>
        <div id="cuartpreg" class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            checked
          />
          <label class="form-check-label" for="exampleRadios1">
            Muchas veces
          </label>
        </div>
        <div id="quintpreg" class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label class="form-check-label" for="exampleRadios2">
            Casi siempre
          </label>
        </div>
        </div>
        </form>
        <a href="MenuEstudiante">
    
          <svg className="float"
            id="svg8"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-arrow-90deg-left"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
            />
          </svg>
        </a>
    
          <button id="but10" type="button" className="btn btn-primary float-right">
           <a href="segundaPregunta">Siguiente</a>
          </button>
    
        
      </div>
    </div>
    </div>
   </div>
  );
}
