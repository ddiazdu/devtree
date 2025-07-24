import colors from "colors";
import mongoose, { mongo } from "mongoose";

//Conexión a base de datos mongo con ODM mongoose

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    const url = `${connection.host}:${connection.port}`;

    console.log(colors.cyan.bold("MongoDB Conectado en " + url));
  } catch (error) {
    console.log(colors.bgRed.bold("El error está en " + error.message));
    process.exit(1);
  }
};
