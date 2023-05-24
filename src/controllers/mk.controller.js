import { conn } from "../db.js ";

export const getMasterKey = async (req, res) => {
    try {
        const [rows] = await conn.query("SELECT * FROM Master_Key WHERE CLAVE = ?", [req.params.clave])
    
        if (rows.length <= 0) return res.status(404).json({message: "Key not found"});

        res.json(rows[0]);

    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong!'
        })
    }
};