import { Router } from "express";
import { getAllUsers, getUser, loginUser, createUser, updateUser, deleteUser } from "../controllers/users.controller.js";

const router = Router();

router.get('/admins', getAllUsers);
router.get('/admins/:id_usuario', getUser);
router.post('/admins', createUser);
router.patch('/admins/:id_usuario', updateUser);
router.delete('/admins/:id_usuario', deleteUser);
router.get('/admins/:usuario:contrasena', loginUser);

export default router;