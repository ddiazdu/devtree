import { Router } from "express";

const router = Router();

/* Autenticación de usuarios */
router.post("/auth/register", (req, res) => {

  console.log(req.body)

});

export default router;
