import React from "react";
import LoginEDP from "../../Components/LoginEDP";

export default function LoginEstudiante() {
  return (
    <div>
      <LoginEDP />
      <button type="submit" class="btn btn-primary">
        <a href="MenuEstudiante">Iniciar Sesion</a>
      </button>
    </div>
  );
}
