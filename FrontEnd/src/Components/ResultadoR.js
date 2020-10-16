import React from "react";
import Rojo from "../Imagenes/img/ResultRojo.png";
import "../Style/styles.css";

class ResultadoR extends React.Component {
  render() {
    return (
      <div id="Fondo_2" style={{ backgroundImage: `url(${Rojo})` }}>
       <div>
        <a href="Logins">
      
        </a>
       </div>
      </div>
    );
  }
}
export default ResultadoR;
