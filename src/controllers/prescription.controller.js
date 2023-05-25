import { conn } from "../db.js ";

export const getAllPrescription = async (req, res) => {
    try {
        const [rows] = await conn.query("SELECT R.id_receta, M.nombre as 'medico_nombre', M.apellido as 'medico_apellido', P.nombre as 'paciente_nombre', P.apellido as 'paciente_apellido', R.indicaciones, R.fecha_expedicion FROM ((Recetas R INNER JOIN Usuarios M ON R.id_medico = M.id_usuario) INNER JOIN Usuarios P ON R.id_paciente = P.id_usuario)")
        
        res.json(rows);

    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong!'
        })
    }
};