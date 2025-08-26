import { Router } from "express";
import { body } from "express-validator";
import { createAccount, login } from "./handlers";
import { ExpressValidator } from "express-validator";
import { handleImportError } from "./middleware/validation";
import { loginRules, registerRules } from "./utils/validationRules";

const router = Router();

/* User registration validations */
router.post("/auth/register", handleImportError(registerRules), createAccount);

router.post("/auth/login", handleImportError(loginRules), login);

export default router;
