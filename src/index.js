import app from "./app.js";
import { env_config } from "./config.js";


const PORT = env_config.PORT;

app.listen(PORT);
console.log(`servidor ejecutandose en el puerto ${PORT}`);
