import { body } from "express-validator";

export const registerRules = [
  // Handle must not be empty
  body("handle").notEmpty().withMessage("Error, el handle no debe estar vacío"),

  // Name must not be empty
  body("name").notEmpty().withMessage("Error, el name no debe estar vacío"),

  // Email must be valid
  body("email").isEmail().withMessage("Error, Email no valido"),

  // Password must be at least 8 characters
  body("password")
    .isLength({ min: 8 })
    .withMessage("Error, la contraseña debe tener un minimo de 8 caracteres"),
];

export const loginRules = [
  // Email must be valid
  body("email").isEmail().withMessage("Error, Email no valido"),

  // Password must be at least 8 characters
  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña es obligatoria"),
];
