import express from "express";
import notasRoute from "./routes/notas.route.js";
import indexRoute from "./routes/index.route.js";

const app = express();

app.use(express.json());

app.use(indexRoute);
app.use(notasRoute);

app.use((req, res, next) => {
  res.status(404).json({ message: "endpoint not found" });
});

export default app;
