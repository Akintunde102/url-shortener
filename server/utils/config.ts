import * as dotenv from "dotenv";
dotenv.config();
export const PORT = process.env.PORT || "";
export const DB_CONN_STRING = process.env.DB_CONN_STRING || "";
export const DOMAIN = process.env.DOMAIN || "";
