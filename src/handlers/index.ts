import { Request, Response } from "express";
import slug from "slug";
import User from "../models/User";
import { hashPassword } from "../utils/auth";

//Asignar type a request y response
export const createAccount = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  /* Consultas */

  const userExists = await User.findOne({ email });

  /* Handle */
  const handle = slug(req.body.handle, "_");

  const handleExists = await User.findOne({ handle });

  if (userExists) {
    const error = new Error(
      "Ya hay un usuario registrado con este email " + email
    );
    return res.status(409).json({ error: error.message });
  }

  if (handleExists) {
    const error = new Error("Ya existe un usuario con este Nickname "+handle);
    return res.status(409).json({ error: error.message });
  }

  const user = new User(req.body);
  user.password = await hashPassword(password);
  user.handle = handle;

  await user.save();
  res.status(201).send("Registro creado correctamente");
};
