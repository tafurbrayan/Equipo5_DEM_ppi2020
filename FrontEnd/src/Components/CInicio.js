import React from "react";
import "../Style/styles.css";
import Foto1 from "../Imagenes/img/Ciudad.png";


class Inicio extends React.Component {
  render() {
    return (
      <div id="Fondo_1" style={{ backgroundImage: `url(${Foto1})` }}>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1 className="t1">Psitopía Net</h1>
              <button id="butt1" type="button" class="btn btn-primary">
                <a id="but" href="Logins">
                  Empezar
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Inicio;
