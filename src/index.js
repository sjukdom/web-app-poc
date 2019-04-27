// Modulos requeridos para crear el servidor
const express = require("express");
const morgan = require("morgan");
const path = require("path");
// Modulos definidos por el usuario
//const connectionADB = require("./database/artistsDB");

// Crear la app de express.js
const app = express();

// -- Configuraciones
app.set("port", process.env.PORT || 3000);

// -- Middleware: funciones que se ejecutan antes de que lleguen a las rutas
app.use(morgan("dev")); // Nos permite visualizar en la terminal informacion importante
app.use(express.json()); // Cuando llegue un dato, recuperar datos en formato json
app.use(express.urlencoded({
  extended: false
})) // Aceptar formularios de los usuarios

// -- Rutas
app.use("/api", require("./routes/index"));

// -- Archivos estaticos (en src/public/)
//console.log(path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));

//
app.listen(app.get("port"), () => {
  console.log(`Server on port -> ${app.get("port")}`);
});
