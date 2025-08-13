import { Request, Response } from "express";
import slug from "slug";
import User from "../models/User";
import { hashPassword, matchPassword } from "../utils/auth";
import { validationResult } from "express-validator";

//assing type to request and response
export const createAccount = async (req: Request, res: Response) => {
  //error handling
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    //get errors in array
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const userExists = await User.findOne({ email });

  /* Handle */
  const handle = slug(req.body.handle, "_");

  const handleExists = await User.findOne({ handle });

  // Prevent duplicate account creation by email

  if (userExists) {
    const error = new Error(
      "Ya hay un usuario registrado con este email " + email
    );
    return res.status(409).json({ error: error.message });
  }

  // Prevent duplicate account creation by handle

  if (handleExists) {
    const error = new Error("Ya existe un usuario con este Nickname " + handle);
    return res.status(409).json({ error: error.message });
  }

  //Asociar valor de request a User + hash + handle
  const user = new User(req.body);
  user.password = await hashPassword(password);
  user.handle = handle;

  await user.save();
  res.status(201).send("Registro creado correctamente");
};

export const login = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  //error handling
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    //get errors in array
    return res.status(400).json({ errors: errors.array() });
  }

  const user = await User.findOne({ email });

  if (!user) {
    const error = new Error("Este usuario no existe");
    return res.status(404).json({ error: error.message });
  }
  // Compare password
  // contraseña ingresada, contraseña almacenada
  const isPassMatch = await matchPassword(password, user.password);

  if (!isPassMatch) {
    const error = new Error("La contraseña ingresada no es correcta");
    return res.status(401).json({ error: error.message });
  }

  res.send("Autenticado");


};
