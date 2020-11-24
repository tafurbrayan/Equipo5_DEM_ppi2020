const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

router.post("/RegistrarEstudiante", (req, res) => {
  const { EMAIL, USUARIO, CONTRASENA, NRO_DOC, TIPO_USUARIO } = req.body;

  mysqlConnection.query(
    `INSERT INTO USUARIO (EMAIL,USUARIO, CONTRASENA,NRO_DOC,TIPO_USUARIO) VALUES ('${EMAIL}','${USUARIO}','${CONTRASENA}',${NRO_DOC},'${TIPO_USUARIO}')`,
    (err, rows, fields) => {
      if (err) {
        res.json({ message: "Usuario no registrado" });
        return console.error(err.message);
      } else {
        res.json({ message: "Usuario registrado" });
        router.post("/InsertUsuario_Test", (req, res) => {
          const { EMAIL, USUARIO, NRO_DOC } = req.body;

          mysqlConnection.query(
            `INSERT INTO USUARIO_TEST (EMAIL,USUARIO,NRO_DOC) VALUES ('${EMAIL}','${USUARIO}',${NRO_DOC})`,
            (err, rows, fields) => {
              if (err) {
                res.json({ message: "Usuario no registrado en usuario_test" });
                return console.error(err.message);
              } else {
                res.json({ message: "Usuario registrado en usuario_test" });
              }
            }
          );
        });
      }
    }
  );
});
router.post("/RegistrarDocente", (req, res) => {
  const { EMAIL, CONTRASENA, NRO_DOC } = req.body;
  //const abreviatura = req.body.mod
  //const correo = req.dody.userEmail
  mysqlConnection.query(
    `INSERT INTO USUARIO (EMAIL,CONTRASENA,NRO_DOC) VALUES ('${EMAIL}', '${CONTRASENA}',${NRO_DOC})`,
    (err, rows, fields) => {
      if (err) {
        res.json({ message: "Usuario no registrado" });
        return console.error(err.message);
      } else {
        res.json({ message: "Usuario registrado" });
      }
    }
  );
});
router.post("/RegistrarProfesional", (req, res) => {
  const {
    EMAIL,
    CONTRASENA,
    NRO_DOC,
    TIPO_USUARIO,
    CERTIFICADO_PROFESIONAL
  } = req.body;
  mysqlConnection.query(
    `INSERT INTO USUARIO (EMAIL,CONTRASENA,NRO_DOC) VALUES ('${EMAIL}', '${CONTRASENA}',${NRO_DOC},'${TIPO_USUARIO}','${CERTIFICADO_PROFESIONAL}')`,
    (err, rows, fields) => {
      if (err) {
        res.json({ message: "Usuario no registrado" });
      } else {
        res.json({ message: "Usuario registrado" });
      }
    }
  );
});

router.post("/LoginEstudiante", (req, res) => {
  const { EMAIL, CONTRASENA } = req.body;

  console.log(EMAIL, CONTRASENA);
  mysqlConnection.query(
    `SELECT * FROM USUARIO WHERE EMAIL='${EMAIL}' AND CONTRASENA='${CONTRASENA}'`,
    (err, rows, fields) => {
      if (err) {
        res.json({ message: `Error` });
        return console.log(err.message);
      }
      if (rows.length > 0) {
        res.json({ message: `Bienvenido` });
      } else {
        res.json({
          message: `Correo/contraseña errada, por favor verifique la info ingresada`
        });
      }
    }
  );
});

router.post("/LoginDocente", (req, res) => {
  const { EMAIL, CONTRASENA } = req.body;
  //const abreviatura = req.body.mod
  console.log(EMAIL, CONTRASENA);
  mysqlConnection.query(
    `SELECT * FROM USUARIO WHERE EMAIL='${EMAIL}' AND CONTRASENA='${CONTRASENA}'`,
    (err, rows, fields) => {
      if (err) {
        res.json({ message: `Error` });
        return console.log(err.message);
      }
      if (rows.length > 0) {
        res.json({ message: `Bienvenido` });
      } else {
        res.json({
          message: `Correo/contraseña errada, por favor verifique la info ingresada`
        });
      }
    }
  );
});

router.post("/LoginProfesional", (req, res) => {
  const { EMAIL, CONTRASENA } = req.body;
  //const abreviatura = req.body.mod
  console.log(EMAIL, CONTRASENA);
  mysqlConnection.query(
    `SELECT * FROM USUARIO WHERE EMAIL='${EMAIL}' AND CONTRASENA='${CONTRASENA}'`,
    (err, rows, fields) => {
      if (err) {
        res.json({ message: `Error` });
        return console.log(err.message);
      }
      if (rows.length > 0) {
        res.json({ message: `Bienvenido` });
      } else {
        res.json({
          message: `Correo/contraseña errada, por favor verifique la info ingresada`
        });
      }
    }
  );
});

module.exports = router;
