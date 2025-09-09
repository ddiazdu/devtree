import express from "express";
import cors from 'cors'
import "dotenv/config";
import router from "./router";
import { connectDB } from "./config/db";
import { corsConfig } from "./config/cors";

//Creando sv express
const app = express();

//LLamo a la conexión
connectDB();

//Cors
app.use(cors(corsConfig))

//Leer datos de formularios
app.use(express.json());

//cualquier solicitud que comience con /, usa este router para manejarla.
app.use("/", router);

export default app;
