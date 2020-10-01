import React from "react";
import Registro from "../../Components/CRegistro";
export default function RegistrarEstudiante() {
  return (
    <div>
      <Registro />
      <form>
        <div class="form-group">
          <label for="exampleFormControlFile1"></label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
      </form>
      <button id="botps" type="submit" class="btn btn-primary">
        <a id="bps" href="Logins">Registrarse</a>
      </button>
    </div>
  );
}
