import { conn } from "../db.js";

//controlador de notas
const allNotas = async (req, res) => {
  try {
    const [result] = await conn.query(`SELECT * FROM notas`);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Error al consultar datos" });
  }
};

const getNotas = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await conn.query("SELECT * FROM notas WHERE id = ?", [id]);
    res.json({ data: result });
  } catch (error) {
    return res.status(500).json({ message: "Error al consultar datos" });
  }
};

const createNotas = async (req, res) => {
  try {
    const { usuario_id, titulo, descripcion, fecha } = req.body;
    const [rows] = await conn.query(
      "INSERT INTO notas (usuario_id, titulo, descripcion, fecha) VALUE(?,?,?,?)",
      [usuario_id, titulo, descripcion, fecha]
    );
    res
      .status(201)
      .json({ id: rows.insertId, usuario_id, titulo, descripcion, fecha });
  } catch (error) {
    return res.status(500).json({ message: "error al procesar los datos" });
  }
};

const updateNota = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;

    const [result] = await conn.query(
      "UPDATE notas SET titulo = IFNULL(?,titulo), descripcion = IFNULL(?,descripcion)  WHERE id = ?",
      [titulo, descripcion, id]
    );

    if (result.affectedRows === 0) {
      return res.status(500).json({ message: "Error al actulizar datos" });
    }

    const [rows] = await conn.query("SELECT * FROM notas WHERE id = ?", [id]);

    res.json({ data: rows[0] });
  } catch (error) {
    return res.status(500).json({ message: "Error al procesar datos" });
  }
};

const deleteNota = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await conn.query("DELETE FROM notas WHERE id = ?", [id]);

    if (rows.affectedRows === 0) {
      return res.status(404).json({ message: "Registros no valido" });
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Error al procesar los datos" });
  }
};

export const notaController = {
  allNotas,
  getNotas,
  createNotas,
  updateNota,
  deleteNota,
};
