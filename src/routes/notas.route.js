import { Router } from "express";
import { conn } from "../db.js";
//import {getNotas, createNotas, updateNota, deleteNota} from '../controllers/nota.controller.js'
import { notaController } from "../controllers/nota.controller.js";

const route = Router();

route.get("/api/notas", notaController.allNotas);

route.get("/api/nota/:id", notaController.getNotas);

route.post("/api/nota", notaController.createNotas);

//route.put('/api/nota/:id', notaController.updateNota)

route.patch("/api/nota/:id", notaController.updateNota);

route.delete("/api/nota/:id", notaController.deleteNota);

export default route;
