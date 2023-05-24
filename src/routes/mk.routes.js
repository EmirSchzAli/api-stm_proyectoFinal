import { Router } from "express";

import { getMasterKey } from "../controllers/mk.controller.js";

const router = Router();

router.get('/mk/:clave', getMasterKey);

export default router;