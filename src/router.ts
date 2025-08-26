import { Router } from "express";
import { body } from "express-validator";
import { createAccount, login } from "./handlers";
import { ExpressValidator } from "express-validator";
import { handleImportError } from "./middleware/validation";

const router = Router();

/* User registration validations */
router.post(
  "/auth/register",

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
  handleImportError,
  createAccount
);

router.post(
  "/auth/login",

  // Email must be valid
  body("email").isEmail().withMessage("Error, Email no valido"),

  // Password must be at least 8 characters
  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña es obligatoria"),
    handleImportError,
  login
);

export default router;
