import React from "react";
import Amarillo from "../Imagenes/img/ResultAmarillo.png";
import "../Style/styles.css";

class ResultadoA extends React.Component {
  render() {
    return (
    <div id="Fondo_1" style={{ backgroundImage: `url(${Amarillo})` }}>
      <div>

        <a href="Logins">

        </a>
      </div>
    </div>
    );
  }
}
export default ResultadoA;
