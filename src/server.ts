import express from "express";
import "dotenv/config";
import router from "./router";
import { connectDB } from "./config/db";

//Creando sv express
const app = express();

//LLamo a la conexión
connectDB();

//Leer datos de formularios
app.use(express.json());

//cualquier solicitud que comience con /, usa este router para manejarla.
app.use("/", router);

export default app;
