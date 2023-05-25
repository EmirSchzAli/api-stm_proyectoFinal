import { Router } from "express";

import { getAllPrescription, createPrescription } from "../controllers/prescription.controller.js";

const router = Router();

router.get('/prescription', getAllPrescription);
router.post('/prescription', createPrescription);

export default router;