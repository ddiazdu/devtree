import { Router } from "express";

const router = Router();

//Routing
router.get("/", (req, res) => {
  res.send("Hola mundo en express");
});
router.get("/nosotros", (req, res) => {
  res.send("Hola mundo en express");
});
router.get("/articulos", (req, res) => {
  res.send("Hola mundo en express");
});
router.get("/blog", (req, res) => {
  res.send("Hola mundo en blog");
});

export default router;
