import { Router } from "express";
import { indexController } from "../controllers/index.controller.js";

const route = Router();

route.get("/", indexController.allNotas);

export default route;
