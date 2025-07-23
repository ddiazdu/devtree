import { Router } from "express";

const router = Router();

/* Autenticación de usuarios */
router.get("/auth/register", (req, res) => {

  console.log("Desde registro de usuarios")

});

export default router;