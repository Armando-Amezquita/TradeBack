import { Router } from "express";
import { routerAuth } from "./Auth.routes.js";
import { routerUsers } from "./Users.routes.js";
import { routerSubjects } from "./Subjects.routes.js";
const router = Router();

// const { routerProducts } = require('./Products.routes');
// const { routerChat } = require('./Chat.routes');

router.use("/api/auth", routerAuth);
router.use("/api/users", routerUsers);
router.use("/api/subject", routerSubjects);
// router.use('/api/products', routerProducts);
// router.use('/api/chat', routerChat);

export { router };
