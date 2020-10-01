import React from "react";
import LoginEDP from "../../Components/LoginEDP";

export default function LoginDocente() {
  return (
    <div>
      <LoginEDP />
      <button type="submit" class="btn btn-primary">
        <a href="MenuDocente">Iniciar Sesion</a>
      </button>
    </div>
  );
}
