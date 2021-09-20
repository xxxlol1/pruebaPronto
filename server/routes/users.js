const routes = require("express").Router();
const db = require("../database/db");

//--------------routes-----------------

// RUTAS GET //
// muestra de usuarios por id
routes.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  let query = `SELECT * FROM users where userId = ?`;
  db.query(query, id, (err, rows, req) => {
    if (err) {
      return res.status(400).json({ text: err });
    }
    return res.status(200).json(rows[0]);
  });
});
// muestra todos los usuarios
routes.get("/usuarios", (req, res) => {
  let query = `SELECT * FROM users`;
  db.query(query, (err, rows, req) => {
    if (err) {
      return res.status(400).json({ text: err });
    }
    return res.status(200).json(rows);
  });
});

// RUTAS POST //
// guardar usuarios
routes.post("/agregarusuario", (req, res) => {
  const { name } = req.body;
  let query = `INSERT INTO  users (name) VALUES ('${name}') `;
  db.query(query, (err, rows, req) => {
    if (err) {
      // Usuario Duplicado
      return res.status(400).json({ text: "Usuario Ya Registrado" });
    }
    return res.status(201).json({ text: "Usuario Registrado" });
  });
});

// RUTAS DELETE //
// Delete usuario
routes.delete("/usuario/:id", (req, res) => {
  const { id } = req.params;
  let query = "DELETE FROM users where userId = ?";
  db.query(query, [id], (err, rows, req) => {
    if (err) {
      return res.status(400).json({ text: err });
    }
    return res.status(200).json({ text: "Usuario Eliminado" });
  });
});

module.exports = routes;
