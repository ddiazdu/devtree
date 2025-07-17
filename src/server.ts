import express from "express";
import router from "./router";

//Creando sv express
const app = express();

//Busca en router la pagina solicitada
app.use("/", router);

export default app;
