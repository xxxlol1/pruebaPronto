require("./database/db");

const express = require("express");

const port = process.env.port || 3000;

const app = express();

app.use(express.json());

app.set("port", port);

// acciones para las meetings meetings
app.use("/api", require("./routes/meetings"));
// acciones para modificar, a;adir usuarios
app.use("/api2", require("./routes/users"));


app.listen(app.get("port"), (error) => {
  if (error) {
    console.log("Error iniciar el servidor" + error);
  }
  console.log(" >> Servidor Corriendo en el puerto:  " + port);
});
