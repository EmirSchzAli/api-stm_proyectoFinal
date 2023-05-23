import { conn } from "../db.js ";

export const getAllUsers = async (req, res) => {
    try {
        
        const [rows] = await conn.query("SELECT * FROM Administradores")
        res.json(rows);

    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong!'
        })
    }
};

export const getUser = async (req, res) => {
    try {
        const [rows] = await conn.query("SELECT * FROM Usuarios WHERE id_usuario = ?", [req.params.id_usuario])
    
        if (rows.length <= 0) return res.status(404).json({message: "User not found"});

        res.json(rows[0]);

    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong!'
        })
    }
};

export const loginUser = async (req, res) => {
    try {

        const {usuario, contrasena} = req.params;

        const [rows] = await conn.query("SELECT * FROM Usuarios WHERE usuario = ? AND contrasena = ?", [usuario, contrasena])
    
        if (rows.length <= 0) return res.status(404).json({message: "User not found"});

        res.json(rows[0]);

    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong!'
        })
    }
};


export const createUser = async (req, res) => {
    
    const {fb_id, num_empleado, nombre,correo, id_tipoAdmin} = req.body
    console.log(req.body);
    try {

        const [rows] = await conn.query("INSERT INTO Administradores (fb_id, num_empleado, nombre, correo, id_tipoAdmin) VALUES (?,?,?,?,?)", [fb_id, num_empleado, nombre, correo, id_tipoAdmin])
        
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

export const updateUser = async (req, res) => {
    const {id_admin} = req.params
    const {num_empleado, nombre, correo} = req.body
    
    try {
        
        const [result] = await conn.query("UPDATE Administradores SET num_empleado = IFNULL(?, num_empleado), nombre = IFNULL(?, nombre), correo = IFNULL(?, correo) WHERE id_admin = ?", [num_empleado, nombre, correo, id_admin])
    
        if (result.affectedRows === 0) return res.status(404).json({message: "Admin not found"});
        
        const[rows] = await conn.query("SELECT * FROM Administradores WHERE id_admin = ?", [id_admin])

        res.json(rows[0]);

    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong!'
        })
    }

};

export const deleteUser = async (req, res) => {
    try {
        
        const [result] = await conn.query("DELETE FROM Administradores WHERE id_admin = ?", [req.params.id_admin])

        if (result.affectedRows <= 0) return res.status(404).json({message: "Admin not found"})

        res.status(200).json({message: "Admin deleted"})

    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong!'
        })
    }
};