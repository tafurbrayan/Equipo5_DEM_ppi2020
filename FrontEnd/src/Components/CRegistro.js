import React from "react";
import "../Style/styles.css";
import Control from "../Imagenes/img/Menu.png";

class Registro extends React.Component {
  render() {
    return (
    
      <div id="Fondo_1" style={{ backgroundImage: `url(${Control})` }}>
    <div class="container h-100">
        <div class="row justify-content-center h-100">
            <div class="col-sm-8 align-self-center text-center">
                  
       
    
          <h1 className="tit5">Registro de usuario</h1>
          <div>
            <form>
              <div  className="form-group col">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Por ejemplo: @gmail.com"
                 
                />
              </div>

              <div  className="form-group col">
                <label for="inputAddress">Usuario</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder=""
                />
              </div>

              <div  className="form-group col">
                <label for="inputAddress2">Contraseña</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder=""
                />
              </div>

              <div  className="form-group col">
                <label for="inputCity">Documento de identidad</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
            </form>
            <button id="botreg" type="submit" class="btn btn-primary float-right">
        <a id="bd" href="Logins">
          Registrarse
        </a>
      </button>
      <a href="Logins">
            <svg
              id="svg1"
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
}
export default Registro;
