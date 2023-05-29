import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import {
  logErrors,
  wrapErrors,
  errorHandler,
} from "./middelwares/ErrorHandler.js";
import { router } from "./routes/index.js";

export const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

//Routes
app.use("/", router);

//ErrorHanddler
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);
