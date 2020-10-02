import React from "react";
import "../Style/styles.css";
import Control from "../Imagenes/img/pikachu_0.jpg";

class CLogins extends React.Component {
  render() {
    return (
      <div id="Fondo_1" style={{ backgroundImage: `url(${Control})` }}>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1 id="tit1">Psitopía Net</h1>
              <button id="butt2" type="button" class="btn btn-primary">
                <a id="botlogin" href="SeleccLogin">
                  Iniciar Sesión
                </a>
              </button>

              <button id="butt22" type="button" class="btn btn-primary">
                <a id="botlogin" href="RegistrarEstudiante">
                  Registrar Estudiante
                </a>
              </button>
              <button id="butt23" type="button" class="btn btn-primary">
                <a id="botlogin" href="RegistrarDocente">
                  Registrar Docente
                </a>
              </button>
              <button id="butt24" type="button" class="btn btn-primary">
                <a id="botlogin" href="RegistrarProfesional">
                  Registrar Profesional
                </a>
              </button>

              <a href="Inicio">
                <svg
                  id="svg2"
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
}
export default CLogins;
