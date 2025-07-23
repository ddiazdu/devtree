import mongoose, { mongo } from "mongoose";

//Conexión a base de datos mongo con ODM mongoose

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    const url = `${connection.host}:${connection.port}`;

    console.log("MongoDB Conectado en " + url);
  } catch (error) {
    console.log("El erro está en " + error.message);
    process.exit(1);
  }
};
