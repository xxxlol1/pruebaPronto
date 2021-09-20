const routes = require("express").Router();
const db = require("../database/db");

//--------------routes-----------------
// RUTAS GET //
//Lista de meetings
routes.get("/", (req, res) => {
  let query =
    "SELECT M.meetingId, U.name, M.meetingTime FROM users U INNER JOIN meetings M on  M.userId =  U.userId";
  db.query(query, (err, rows, req) => {
    if (err) {
      return res.status(400).json({ text: err });
    }
    return res.status(200).json(rows);
  });
});
// enlista las meetings por usuario
routes.get("/:id", (req, res) => {
  const { id } = req.params;
  let query =
    "SELECT userId, meetingId, meetingTime FROM meetings WHERE userId = ?";
  db.query(query, [id], (err, rows, req) => {
    if (err) {
      return res.status(400).json({ text: err });
    }
    return res.status(200).json(rows);
  });
});
// Meetings libres  - Revisar
routes.get("/meetingA", (req, res) => {
  const { inicia } = req.body.start;
  const { termina } = req.body.end;
  let query = `Select * from users U where not exists (Select 1 from meetings M where U.userId = M.userId  and (M.free_time Between ${inicia} and ${termina}) and (M.availableTime Between '08:00' and '17:00') and (M.availableTime not Between '12:00' and '13:00'))`;
  db.query(query, (err, rows, req) => {
    if (err) {
      throw err;
    }
    return res.status(200).json(rows);
  });
});
// RUTAS DELETE //
// Delete meeting
routes.delete("/listmeeting/:id", (req, res) => {
  const { id } = req.params;
  let query = "DELETE FROM meetings where meetingId = ?";
  db.query(query, [id], (err, rows, req) => {
    if (err) {
      return res.status(400).json({ text: err });
    }
    return res.status(200).json({ text: "Meeting Eliminada" });
  });
});
// RUTAS POST //
// agregar meetings Revisar
routes.post("/meeting", (req, res) => {
  db.query("INSERT INTO meetings set ?", [req.body]);
  return res.status(200).json({ text: "Meeting Creada" });
  /*const { meetingTime, userId } = req.body;
  let query = `INSERT INTO meetings (meetingTime, userId) VALUES ('${meetingTime}','${userId}')`;
  db.query(query, (err, rows, req) => {
    if (err) {
      throw err;
    }
    res.json("Meeting creada");
  });*/
});

module.exports = routes;
