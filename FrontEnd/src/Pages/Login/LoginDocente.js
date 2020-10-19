import React from "react";
import LoginEDP from "../../Components/LoginEDP";
import Paisaje from "../../Imagenes/img/Paisaje.png";
export default function LoginDocente() {
  return (
    <div id="Fondo_1" style={{ backgroundImage: `url(${Paisaje})` }}>
    <div className="container fluid" >
      <div className="row">
        <div className="col">

        <h1 className="tit1"> Psitopía Net </h1>
        <div>
        
            <div class="form-group col">
              <label className="tit1" for="exampleInputEmail1">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingresa tu email"
              ></input>
              <small id="emailHelp" class="form-text text-muted"></small>
            </div>
            <div class="form-group col">
              <label className="tit1" for="exampleInputPassword1">
                Contraseña
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Escribe tu contraseña"
              ></input>
            </div>
            <a href="OlvidasteTuContraseña">
              <p id="olv">¿Olvidaste tu contraseña?</p>
            </a>
            <button id="llp" type="submit" class="btn btn-primary float-right">
  <a id="isd" href="MenuDocente">
    Iniciar Sesión
  </a>
</button>
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
         
        </div>
      </div>
    </div>
</div>
</div>
   
  );
}
/*
<div>
<LoginEDP />
<button id="llp" type="submit" class="btn btn-primary">
  <a id="isd" href="MenuDocente">
    Iniciar Sesión
  </a>
</button>
</div>*/