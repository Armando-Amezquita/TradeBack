import { Router } from "express";
import { ClassAuth } from "../controllers/Auth.controller.js";
import Boom from "@hapi/boom";
import { body, validationResult } from "express-validator";
const routerAuth = Router();

routerAuth.post(
  "/login",
  body("email").not().isEmpty().trim().isEmail(),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw Boom.unauthorized(
          `The field ${errors.errors[0].param} is ${errors.errors[0].msg} `
        );
      }
      const { email, password } = req.body;
      const response = await ClassAuth.login(email, password);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

routerAuth.post(
  "/signup",
  // body('name').not().isEmpty().trim().isAlpha(),
  // body('email').not().isEmpty().trim().isEmail(),
  // body('identification_number').not().isEmpty().trim().isNumeric(),
  // body('phone').not().isEmpty().trim().isNumeric(),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw Boom.unauthorized(
          `The field ${errors.errors[0].param} is ${errors.errors[0].msg} `
        );
      }
      const response = await ClassAuth.signUp(req.body);
      res.status(200).json(response);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }
);

export { routerAuth };
