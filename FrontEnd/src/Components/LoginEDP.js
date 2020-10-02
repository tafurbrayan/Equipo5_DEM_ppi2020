import React from "react";
import "../Style/styles.css";
import Paisaje from "../Imagenes/img/Paisaje.png";

class LoginEDP extends React.Component {
  render() {
    return (
      <div id="Fondo_1" style={{ backgroundImage: `url(${Paisaje})` }}>
        <div>
          <a href="SeleccLogin">
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
          <h1> Psitopía Net </h1>
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
              </div>
              <div id="sinrow" class="form-group col-md-6">
                <label for="exampleInputPassword1">Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Escribe tu contraseña"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginEDP;
