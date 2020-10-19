import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../Pages/Inicio";
import Logins from "../Pages/Login/Logins";
import LoginEstudiante from "../Pages/Login/LoginEstudiante";
import SeleccLogin from "../Pages/Login/SeleccLogin";
import LoginDocente from "../Pages/Login/LoginDocente";
import LoginProfesional from "../Pages/Login/LoginProfesional";
import OlvidasteTuContraseña from "../Pages/Login/OlvidasteTuContraseña";
import SiOlvideContraseña from "../Pages/Login/SiOlvideContraseña";
import RegistrarEstudiante from "../Pages/Registro/RegistrarEstudiante";
import RegistrarDocente from "../Pages/Registro/RegistrarDocente";
import RegistrarProfesional from "../Pages/Registro/RegistrarProfesional";
import MenuEstudiante from "../Pages/Menus/MenuEstudiante";
import MenuDocente from "../Pages/Menus/MenuDocente";
import MenuProfesional from "../Pages/Menus/MenuProfesional";
import RDocente from "../Pages/Resultados/RDocente";
import REstudiante from "../Pages/Resultados/REstudiante";
import RProfesional from "../Pages/Resultados/RProfesional";
import RfinalV from "../Pages/Test/RfinalV"
import RfinalA from "../Pages/Test/RfinalA"
import RfinalR from "../Pages/Test/RfinalR"
import QueEsUnTest from "../Pages/Menus/Complementos/QueEsUnTest"
import EstudiantesQueRealizaronTest from "../Pages/Menus/Complementos/EstudiantesQueRealizaronTest"
import EstudiantesNoRealizaronTest from "../Pages/Menus/Complementos/EstudiantesNoRealizaronTest"
import EstudiantesNoContactados from "../Pages/Menus/Complementos/EstudiantesNoContactados"
import EstudiantesContactados from "../Pages/Menus/Complementos/EstudiantesContactados"
import primeraPregunta from "../Pages/Test/primeraPregunta"
import segundaPregunta from "../Pages/Test/segundaPregunta"
import terceraPregunta from "../Pages/Test/terceraPregunta"
import cuartaPregunta from "../Pages/Test/cuartaPregunta"
import quintaPregunta from "../Pages/Test/quintaPregunta"
import sextaPregunta from "../Pages/Test/sextaPregunta"




const App = () => {

  return (
    
    <div>
     
    <BrowserRouter>      
      <Switch>      
        <Route exact path="/" component={Inicio} />
        <Route exact path="/Inicio" component={Inicio} />
        <Route exact path="/Logins" component={Logins} />
        <Route exact path="/LoginEstudiante" component={LoginEstudiante} />
        <Route exact path="/LoginDocente" component={LoginDocente} />
        <Route exact path="/LoginProfesional" component={LoginProfesional} />
        <Route
          exact
          path="/RegistrarEstudiante"
          component={RegistrarEstudiante}
        />
        <Route exact path="/RegistrarDocente" component={RegistrarDocente} />
        <Route
          exact
          path="/RegistrarProfesional"
          component={RegistrarProfesional}
        />
        <Route exact path="/SeleccLogin" component={SeleccLogin} />
        <Route exact path="/MenuEstudiante" component={MenuEstudiante} />
        <Route exact path="/MenuDocente" component={MenuDocente} />
        <Route exact path="/MenuProfesional" component={MenuProfesional} />
        <Route exact path="/RDocente" component={RDocente} />
        <Route exact path="/REstudiante" component={REstudiante} />
        <Route exact path="/RProfesional" component={RProfesional} />
        <Route exact path="/QueEsUnTest" component={QueEsUnTest} />
        <Route exact path="/EstudiantesQueRealizaronTest" component={EstudiantesQueRealizaronTest} />
        <Route exact path="/EstudiantesNoRealizaronTest" component={EstudiantesNoRealizaronTest} />
        <Route exact path="/OlvidasteTuContraseña" component={OlvidasteTuContraseña} />
        <Route exact path="/SiOlvideContraseña" component={SiOlvideContraseña} />
        <Route exact path="/EstudiantesContactados" component={EstudiantesContactados} />
        <Route exact path="/EstudiantesNoContactados" component={EstudiantesNoContactados} />
        <Route exact path="/primeraPregunta" component={primeraPregunta} />
        <Route exact path="/segundaPregunta" component={segundaPregunta} />
        <Route exact path="/terceraPregunta" component={terceraPregunta} />
        <Route exact path="/cuartaPregunta" component={cuartaPregunta} />
        <Route exact path="/quintaPregunta" component={quintaPregunta} />
        <Route exact path="/sextaPregunta" component={sextaPregunta} />
        <Route exact path="/RfinalV" component={RfinalV} />
        <Route exact path="/RfinalA" component={RfinalA} />
        <Route exact path="/RfinalR" component={RfinalR} />
      </Switch>
    </BrowserRouter>
   </div>
  );
};

export default App;


/*
class App extends Component {
  render() {
    return (
      <div className="contenedor">
        <div>
          <h2> Psitopía Net </h2>
          <img src={FondoInicio} />
          <button id="bot1" type="button" class="btn btn-primary">
            Empezar
          </button>
        </div>
      </div>
    );
  }
}

export default App;
*/
