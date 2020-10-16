import React from "react";
import "../Style/styles.css";
import Resultado from "../Imagenes/img/Resultados.png";

class ResultadoGlobal extends React.Component {
  render() {
    return (
      <div id="Fondo_1" style={{ backgroundImage: `url(${Resultado})` }}></div>
    );
  }
}
export default ResultadoGlobal;