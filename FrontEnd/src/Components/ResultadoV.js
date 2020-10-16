import React from "react";
import Verde from "../Imagenes/img/ResultVerde.png";
import "../Style/styles.css";

class ResultadoV extends React.Component {
  render() {
    return (
      <div id="Fondo_1" style={{ backgroundImage: `url(${Verde})` }}>
       <div>
        <a href="Logins">

        </a>
       </div>
      </div>
    );
  }
}
export default ResultadoV;
