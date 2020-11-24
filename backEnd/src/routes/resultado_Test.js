const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

//Mostrar Estudiantes que no han realizado el Test
router.get("/EstudianteNoHanRealizadoTest", (req, res) => {
  mysqlConnection.query(
    `SELECT USUARIO.EMAIL, USUARIO.USUARIO FROM USUARIO`,
    (err, rows, fiels) => {
      if (!err) {
        res.json(rows);
        console.log(fiels);
      } else {
        console.log(err);
      }
    }
  );
});

//Mostrat estudiantes que sacaron resultado en rojo(estudiantes no contactados)

router.get("/ResultadoRojo", (req, res) => {
  mysqlConnection.query(
    `SELECT USUARIO.EMAIL, USUARIO.USUARIO, RESULTADO_TEST.RESPUESTA_RESULTADO FROM USUARIO INNER JOIN USUARIO_TEST ON (USUARIO.NRO_DOC=USUARIO_TEST.NRO_DOC) INNER JOIN RESULTADO_TEST ON (RESULTADO_TEST.Id_Test = USUARIO_TEST.Id_Test) WHERE RESULTADO_TEST.RESPUESTA_RESULTADO >= 21 `,
    (err, rows, fiels) => {
      if (!err) {
        res.json(rows);
        console.log(fiels);
      } else {
        console.log(err);
      }
    }
  );
});

//Mostrat estudiantes contactados

router.get("/EstudiantesContact", (req, res) => {
  mysqlConnection.query(
    `SELECT USUARIO.EMAIL, USUARIO.USUARIO, RESULTADO_TEST.RESPUESTA_RESULTADO FROM USUARIO INNER JOIN USUARIO_TEST ON (USUARIO.NRO_DOC=USUARIO_TEST.NRO_DOC) INNER JOIN RESULTADO_TEST ON (RESULTADO_TEST.Id_Test = USUARIO_TEST.Id_Test) WHERE RESULTADO_TEST.RESPUESTA_RESULTADO =0 `,
    (err, rows, fiels) => {
      if (!err) {
        res.json(rows);
        console.log(fiels);
        res.json({ message: "consulta realizada" });
      } else {
        res.json({ message: "Error usuarioContactado Back" });
        return console.error(err.message);
      }
    }
  );
});

//Mostrar estudiantes que realizaron el test
router.get("/RealizaronTest", (req, res) => {
  mysqlConnection.query(
    `SELECT USUARIO.EMAIL, USUARIO.USUARIO, RESULTADO_TEST.RESPUESTA_RESULTADO FROM USUARIO INNER JOIN USUARIO_TEST ON (USUARIO.NRO_DOC=USUARIO_TEST.NRO_DOC) INNER JOIN RESULTADO_TEST ON (RESULTADO_TEST.Id_Test = USUARIO_TEST.Id_Test) WHERE RESULTADO_TEST.RESPUESTA_RESULTADO >= 1`,
    (err, rows, fiels) => {
      if (!err) {
        res.json(rows);
        console.log(fiels);
      } else {
        console.log(err);
      }
    }
  );
});


//Sumar puntaje
router.post("/RTOTAL", (req, res) => {
  mysqlConnection.query(
    `UPDATE RESULTADO_TEST SET RESPUESTA_RESULTADO=(RESPUESTA1 + RESPUESTA2 + RESPUESTA3 + RESPUESTA4 + RESPUESTA5 + RESPUESTA6) `,
    (err, rows, fiels) => {
      if (err) {
        res.json({ message: "Error" });
        return console.error(err.message);
      } else {
        res.json({ message: "Resultado Ingresado" });
      }
    }
  );
});

router.get("/RTOTALFINAL", (req, res) => {
  mysqlConnection.query(
    `SELECT RESPUESTA_RESULTADO FROM RESULTADO_TEST `,
    (err, rows, fiels) => {
      if (err) {
        res.json({ err });
        return;
      }

      res.json(rows[0]);
    }
  );
});



router.post("/respuestas", (req, res) => {
  const {
    RESPUESTA1,
    RESPUESTA2,
    RESPUESTA3,
    RESPUESTA4,
    RESPUESTA5,
    RESPUESTA6,
    RESPUESTA_RESULTADO
  } = req.body;

  console.log(RESPUESTA1);

  mysqlConnection.query(
    `INSERT INTO RESULTADO_TEST (RESPUESTA1,RESPUESTA2,RESPUESTA3,RESPUESTA4,RESPUESTA5,RESPUESTA6,RESPUESTA_RESULTADO)
  VALUES (${RESPUESTA1},${RESPUESTA2},${RESPUESTA3},${RESPUESTA4},${RESPUESTA5},${RESPUESTA6},${RESPUESTA_RESULTADO}) `,
    (err, rows, fields) => {
      if (err) {
        res.json({ message: "Respuesta No ingresada" });
        return console.error(err.message);
      } else {
        res.json({ message: "Respuesta Ingresada" });
      }
    }
  );
});
module.exports = router;
