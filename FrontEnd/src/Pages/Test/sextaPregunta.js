import React from "react";
import "../../Style/styles.css";
import Pregunta6 from "../../Imagenes/img/Pregunta6.png";

export default function sextaPregunta() {
  return (
    <div className="FondoP3">
    <div class="row justify-content-center ">
    <div id="Fondo_1" style={{ backgroundImage: `url(${Pregunta6})` }}>
        <div  className="col align-self-center text-center   ">  
     
      
        <h1 id="tit6">
          ¿Si tienes problemas con tus familiares, los resuelves fácilmente?
        </h1>
        <div id="primpreg6" class="form-check">
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
        <div id="segpreg6" class="form-check">
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
        <div id="terpreg6" class="form-check">
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
        <div id="cuartpreg6" class="form-check">
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
        <div id="quintpreg6" class="form-check">
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
        <a href="RfinalV">
          <button id="butt6" type="button" class="btn btn-primary float-right">
            Siguiente
          </button>
        </a>
        <a href="quintaPregunta">
          <svg
          className="float"
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
      </div>
      </div>
      </div>
      </div>
  );
}
