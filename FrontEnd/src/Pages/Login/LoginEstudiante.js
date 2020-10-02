import React from "react";
import LoginEDP from "../../Components/LoginEDP";

export default function LoginEstudiante() {
  return (
    <div>
      <LoginEDP />
      <button id="ise" type="submit" class="btn btn-primary">
        <a id="me" href="MenuEstudiante">
          Iniciar Sesión
        </a>
      </button>
    </div>
  );
}
