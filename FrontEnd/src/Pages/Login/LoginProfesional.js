import React from "react";
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
          <button id="llp" type="submit" className="btn btn-primary">
            <a id="isps" href="MenuProfesional">
              {" "}
              Iniciar Sesión
            </a>
          </button>
        </div>
      </div>
    );
  }
}
export default LoginProfesional;
