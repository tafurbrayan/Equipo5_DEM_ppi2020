import React from "react";
import Registro from "../../Components/CRegistro";
export default function RegistrarEstudiante() {
  return (
    <div>
      <Registro />
      <form id="selecarc" >
        <div class="form-group">
          <label for="exampleFormControlFile1"></label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
      </form>
    </div>
  );
}
