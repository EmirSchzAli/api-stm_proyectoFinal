import { conn } from "../db.js ";

export const getAllPrescription = async (req, res) => {
    try {
        const [rows] = await conn.query("SELECT R.id_receta, M.nombre as 'medico_nombre', M.apellido as 'medico_apellido', P.nombre as 'paciente_nombre', P.apellido as 'paciente_apellido', R.indicaciones, R.indicaciones_tp, R.fecha_expedicion FROM Recetas R INNER JOIN Usuarios M ON R.id_medico = M.id_usuario INNER JOIN Usuarios P ON R.id_paciente = P.id_usuario")
        
        res.json(rows);

    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong!'
        })
    }
};

export const getByPatient = async (req, res) => {
    try {
        const [rows] = await conn.query("SELECT R.id_receta, M.nombre as 'medico_nombre', M.apellido as 'medico_apellido', P.nombre as 'paciente_nombre', P.apellido as 'paciente_apellido', R.indicaciones, R.indicaciones_tp, R.fecha_expedicion FROM Recetas R INNER JOIN Usuarios M ON R.id_medico = M.id_usuario INNER JOIN Usuarios P ON R.id_paciente = P.id_usuario WHERE P.id_usuario = ?", [req.params.id_paciente])
        
        res.json(rows);

    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong!'
        })
    }
};

export const createPrescription = async (req, res) => {
    
    const {id_medico, id_paciente, indicaciones, indicaciones_tp, fecha_expedicion} = req.body
    console.log(req.body);
    try {

        const [rows] = await conn.query("INSERT INTO Recetas (id_medico, id_paciente, indicaciones, indicaciones_tp, fecha_expedicion) VALUES (?,?,?,?,?)", [id_medico, id_paciente, indicaciones, indicaciones_tp, fecha_expedicion])
        
        /*res.send({
            id: rows.insertId,
            fb_id,
            num_empleado,
            nombre,
            correo,
            id_tipoAdmin
        });*/
        console.log(rows);
        res.status(201).json({
            id: rows.insertId
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong!'
        })
    }
};