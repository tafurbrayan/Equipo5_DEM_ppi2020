import React from "react";
import "../../Style/styles.css";
import Siolvida from "../../Imagenes/img/enviado.png";

export default function SiOlvideContraseña() {
  return (
    <div id="Fondo_1" style={{ backgroundImage: `url(${Siolvida})` }}>
      <div>
        <h1 id="correo">¡Correo enviado!</h1>
       <br></br>

        <p id="text">
          ¡Revisa tu correo electrónico!. En caso tal de que no encuentres el
          mensaje, recuerda revisar en "Spam"
        </p>

        <button id="buttsi" type="submit" class="btn btn-primary">
          <a id="" href="Logins">
            Siguiente
          </a>
        </button>
      </div>
    </div>
  );
}
