import express from "express";
import router from "./router";

//Creando sv express
const app = express();

//Leer datos de formularios
app.use(express.json());

//cualquier solicitud que comience con /, usa este router para manejarla.
app.use("/", router);

export default app;
