const routes = require("express").Router();
const db = require("../database/db");
const fs = require("fs");
const e = require("express");

const obj = {};
const meetings = [];
//--------------routes-----------------
// RUTAS GET //

const saveData = (meetsDisponibles) => {
  const finished = (error) => {
    if (error) {
      console.error(error);
      return;
    }
  };
  const jsonData = JSON.stringify(meetsDisponibles);
  fs.writeFile("output.json", jsonData, finished);
  console.log(" >> Archivo output.json Creado!")
};

routes.get("/meetingFormat", (req, res) => {
  let query = `SELECT meetingTime, name FROM meetings M, users U where U.userId = M.userId;`;
  let actualUser = "";
  let meets = {};
  let arrmeets = [];
  db.query(query, (err, rows, req) => {
    rows.forEach((element) => {
      if (actualUser == "") {
        actualUser = element.name;
        arrmeets.push(element.meetingTime);
        meets[actualUser] = [element.meetingTime];
      } else if (actualUser != element.name) {
        meets[actualUser] = arrmeets;
        actualUser = element.name;
        arrmeets = [];
      } else {
        arrmeets.push(element.meetingTime);
      }
    });

    Object.keys(meets).forEach((key) => {
      let horariosDisponibles = [
        "08:00:00",
        "08:30:00",
        "09:00:00",
        "09:30:00",
        "10:00:00",
        "10:30:00",
        "11:00:00",
        "11:30:00",
        "13:00:00",
        "13:30:00",
        "14:00:00",
        "14:30:00",
        "15:00:00",
        "15:30:00",
        "16:00:00",
        "16:30:00",
        "17:00:00",
        "17:30:00",
      ];
      let aux = meets[key];

      aux.forEach((meet) => {
        const index = horariosDisponibles.indexOf(meet);
        if (index > -1) {
          horariosDisponibles.splice(index, 1);
        }
      });

      meets[key] = horariosDisponibles;
    });

    let meetsDisponibles = {
      "08:00:00": [],
      "08:30:00": [],
      "09:00:00": [],
      "09:30:00": [],
      "10:00:00": [],
      "10:30:00": [],
      "11:00:00": [],
      "11:30:00": [],
      "13:00:00": [],
      "13:30:00": [],
      "14:00:00": [],
      "14:30:00": [],
      "15:00:00": [],
      "15:30:00": [],
      "16:00:00": [],
      "16:30:00": [],
      "17:00:00": [],
      "17:30:00": [],
    };

    Object.keys(meetsDisponibles).forEach((key) => {
      let auxArr = [];
      Object.keys(meets).forEach((kname) => {
        if (meets[kname].includes(key)) {
          auxArr.push(kname);
        }
      });
      meetsDisponibles[key] = auxArr;
    });
    saveData(meetsDisponibles);

    res.status(200).json(meetsDisponibles);

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
