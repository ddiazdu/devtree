import colors from "colors";
import server from "./server";

//variable de entorno en Node.js que le indica a tu aplicación en qué puerto debe correr el servidor.
const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(colors.bgBlue.magenta("Servidor funcionando en el puerto " + port));
});
