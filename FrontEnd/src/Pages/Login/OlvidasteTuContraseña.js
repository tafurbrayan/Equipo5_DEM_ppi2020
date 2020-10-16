import React from "react";
import "../../Style/styles.css";
import Olvida from "../../Imagenes/img/Recuperar.png";

export default function OlvidasteTuContraseña() {
  return (
    <div id="Fondo_1" style={{ backgroundImage: `url(${Olvida})` }}>
      <div>
        <form>
          <div id="sinrow" class="form-group col-md-6">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingresa tu email"
            ></input>
            <small id="emailHelp" class="form-text text-muted"></small>

            <label for="exampleInputEmail1">Usuario</label>
            <input
              type="Usuario"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingresa tu usuario "
            ></input>
            <small id="UsuarioHelp" class="form-text text-muted"></small>
          </div>
        </form>

        <button id="bot-olv" className="" type="submit" class="btn btn-primary">
          <a id="bt-ol" className="" href="SiOlvideContraseña">
            Siguiente
          </a>
        </button>
        <a href="SeleccLogins">
          <svg
            id="svg5"
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
  );
}
