import { conn } from "../db.js";

const allNotas = async (req, res) => {
  try {
    const [result] = await conn.query(`SELECT * FROM notas`);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Error al consultar datos" });
  }
};

export const indexController = {
  allNotas,
};
