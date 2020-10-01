import React from "react";
import FFLECHATRAS from "../../Imagenes/img/FFLECHATRAS.png";
import LoginEDP from "../../Components/LoginEDP";
class LoginProfesional extends React.Component {
  render() {
    return (
      <div>
        <div>
          <LoginEDP />

          <div className="form-group"></div>

          <form>
            <div class="form-group"></div>
          </form>
          <button type="submit" className="btn btn-primary">
            <a href="MenuProfesional"> Iniciar Sesion</a>
          </button>
        </div>
      </div>
    );
  }
}
export default LoginProfesional;
