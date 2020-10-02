import React from "react";
import Registro from "../../Components/CRegistro";
export default function RegistrarEstudiante() {
  return (
    <div>
      <Registro />
      <button id="botreg" type="submit" class="btn btn-primary">
        <a id="br" href="Logins">
          Registrarse
        </a>
      </button>
    </div>
  );
}
