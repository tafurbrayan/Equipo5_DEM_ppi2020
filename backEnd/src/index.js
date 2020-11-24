const express = require('express');
const cors = require("cors");
const usuario= require('./routes/usuario');
const resultado_Test = require('./routes/resultado_Test');
const app = express();



// Ajustes
app.set('port',3000);

// Middlewares
app.use(cors({origin: '*'}))
app.use(express.json());

app.use(usuario);
app.use(resultado_Test);

// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});