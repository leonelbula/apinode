import { createPool } from "mysql2/promise";
import { env_config } from "./config.js";

export const conn = createPool({
  host: env_config.DB_HOST,
  user: env_config.DB_USER,
  password: env_config.DB_PASSWORD,
  port: env_config.DB_PORT,
  database: env_config.DB_DATABASE,
});
