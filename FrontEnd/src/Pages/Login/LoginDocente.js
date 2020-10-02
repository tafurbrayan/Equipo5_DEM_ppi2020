import React from "react";
import LoginEDP from "../../Components/LoginEDP";

export default function LoginDocente() {
  return (
    <div>
      <LoginEDP />
      <button id="botd" type="submit" class="btn btn-primary">
        <a id="isd" href="MenuDocente">
          Iniciar Sesión
        </a>
      </button>
    </div>
  );
}
