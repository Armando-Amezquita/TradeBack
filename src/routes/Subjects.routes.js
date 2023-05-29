import { Router } from "express";
import { verifyToken, apikey, isUser } from "../middelwares/AuthJWT.js";
import { ClassSubjects } from "../controllers/subjects/Subjects.controller.js";
const routerSubjects = Router();

routerSubjects.post("/", async (req, res, next) => {
  try {
    const response = await ClassSubjects.create(req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

routerSubjects.get(
  "/",
  /* verifyToken, apikey, isUser, */ async (req, res, next) => {
    try {
      const response = await ClassSubjects.getAll();
      res.status(200).json(response);
    } catch (error) {
      res.status(403);
      next(error);
    }
  }
);

routerSubjects.get(
  "/:id",
  verifyToken,
  apikey,
  isUser,
  async (req, res, next) => {
    try {
      const response = await ClassSubjects.getById(req.params.id);
      if (response === undefined) throw new Error("Error");

      if (Object.keys(response).length === 0)
        throw new Error("No se encontro un usuario con ese ID");

      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

export { routerSubjects };
