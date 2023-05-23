import { Router } from "express";
import { getAllUsers, getUser, loginUser, createUser, updateUser, deleteUser } from "../controllers/users.controller.js";

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:id_usuario', getUser);
router.post('/users', createUser);
router.patch('/users/:id_usuario', updateUser);
router.delete('/users/:id_usuario', deleteUser);
router.get('/users/:usuario/:contrasena', loginUser);

export default router;