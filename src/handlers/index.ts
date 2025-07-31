import { Request, Response } from "express";
import User from "../models/User";
import { hashPassword } from "../utils/auth";

//Asignar type a request y response
export const createAccount = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    const error = new Error("El usuario ya esta registrado");
    return res.status(409).json({ error: error.message });
  }

  const passwordHashed = await hashPassword(password);

  const user = new User({
    name: name,
    email: email,
    password: passwordHashed,
  });

  await user.save();

  res.status(201).send("Registro creado correctamente");
};
