const routes = require("express").Router();
const db = require("../database/db");
const fs = require("fs");

const obj = {};
const meetings = [];
//--------------routes-----------------
// RUTAS GET //
routes.get("/meetingFormat", (req, res) => {
  let query = `SELECT availableTime, name FROM meetings M, users U where U.userId = M.userId;`;
  db.query(query, (err, rows, req) => {
    rows.forEach((element) => {
      if (!meetings.includes(element.availableTime)) {
        meetings.push(element.availableTime);
      }
    });

    meetings.forEach((meet) => {
      let arrayNames = [];
      rows.forEach((element) => {
        if (element.availableTime == meet) {
          arrayNames.push(element.name);
          arrayNames.sort();
        }
      });
      obj[meet] = arrayNames;
    });

    if (err) {
      throw err;
    }

    res.status(200).json(obj);

    const saveData = (obj) => {
      const finished = (error) => {
        if (error) {
          console.error(error);
          return;
        }
      };
      const jsonData = JSON.stringify(obj);
      fs.writeFile("output.json", jsonData, finished);
    };
    saveData(obj);
  });
});

// Meetings libres  - Revisar
routes.post("/meetingA", (req, res) => {
  //console.log("body: ", req.body);
  const start = req.body.start;
  const end = req.body.end;
  let query = `Select * from users U where not exists (Select 1 from meetings M where U.userId = M.userId and (M.availableTime Between '${start}' and '${end}') and (M.availableTime Between '08:00' and '17:00') and (M.availableTime not Between '12:00' and '13:00'))`;
  db.query(query, (err, rows, req) => {
    if (err) {
      throw err;
    }
    return res.status(200).json(rows);
  });
});

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
  //console.log(id);
  let query =
    "SELECT userId, meetingId, meetingTime FROM meetings WHERE userId = ?";
  db.query(query, [id], (err, rows, req) => {
    if (err) {
      return res.status(400).json({ text: err });
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
  const { meetingTime, userId, freeTime } = req.body;
  let query = `INSERT INTO meetings (meetingTime, userId, availableTime) VALUES ('${meetingTime}','${userId}', '${freeTime}')`;
  db.query(query, (err, rows, req) => {
    if (err) {
      throw err;
    }
    res.json("Meeting creada");
  });
});

module.exports = routes;
