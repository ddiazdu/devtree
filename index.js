import express from "express";

//Creando sv express
const app = express();

//Routing

app.get("/", (req, res) => {
  res.send("Hola mundo en express");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Servidor funcionando en el puerto " + port);
});
