import React, { Component } from "react";
import "../Style/styles.css";
import Ciudad from "../Imagenes/img/Men_u.png";

class CMenu extends Component {
  render() {
    return (
      <div id="Fondo_1" style={{ backgroundImage: `url(${Ciudad})` }}>
        <div className="container">
          <h1 className="t1">Psitopía Net</h1>
          <a href="Logins">
            <button id="bot99" type="button" class="btn btn-primary">
              Cerrar Sesión
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default CMenu;
