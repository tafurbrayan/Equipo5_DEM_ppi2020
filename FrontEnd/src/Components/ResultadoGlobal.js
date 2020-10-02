import React from "react";
import RAmarillo from "../Imagenes/img/RAmarillo.jpg";
import RVerde from "../Imagenes/img/RVerde.jpg";
import RRojo from "../Imagenes/img/RROJO.jpg";

class ResultadoGlobal extends React.Component {
  render() {
    return (
      <div>
       
        <div>
          <img className="fcu" src={RAmarillo} />
          <img className="fcu" src={RVerde} />
          <img className="fcu" src={RRojo} />
         
          
        </div>
      </div>
    );
  }
}
export default ResultadoGlobal;