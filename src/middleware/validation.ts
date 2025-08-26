import type { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { registerRules } from "../utils/validationRules";

export const handleImportError = (rules) => {
  return (req: Request, res: Response, next: NextFunction) => {
    //error handling
    let errors = validationResult(req);

    console.log("Desde validation.ts");

    if (!errors.isEmpty()) {
      //get errors in array
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  };
};
