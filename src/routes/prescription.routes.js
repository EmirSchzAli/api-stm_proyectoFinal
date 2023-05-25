import { Router } from "express";

import { getAllPrescription } from "../controllers/prescription.controller.js";

const router = Router();

router.get('/prescription', getAllPrescription);

export default router;