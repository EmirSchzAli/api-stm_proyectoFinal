import { Router } from "express";

import { getAllPrescription, createPrescription, getByPatient } from "../controllers/prescription.controller.js";
import app from "../app.js";

const router = Router();

router.get('/prescription', getAllPrescription);
router.get('/prescription/:id_paciente', getByPatient)
router.post('/prescription', createPrescription);

export default router;