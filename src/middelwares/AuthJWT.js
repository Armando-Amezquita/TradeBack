import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";
import { ClassUsers } from "../controllers/users/Users.controller.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["token"];
    if (!token) throw new Error("Token not send");
    const decoded = jwt.verify(token, SECRET);
    req.accountId = decoded.id;
    next();
  } catch (error) {
    next(Boom.badData(error));
  }
};

export const apikey = async (req, res, next) => {
  try {
    const apikeyencoded = req.header("apikey");
    if (apikey == null) throw Error();
    next();
  } catch (error) {
    next(Boom.unauthorized(error));
  }
};

export const isUser = async (req, res, next) => {
  try {
    let user = await ClassUsers.getByToken(req.header("token"));
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "No Authorized",
    });
  }
};
