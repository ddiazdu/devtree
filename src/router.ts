import { Router } from "express";
import { createAccount } from "./handlers";

const router = Router();

/* Autenticación de usuarios */
router.post("/auth/register", createAccount);

export default router;
