import * as dotenv from "dotenv";
dotenv.config();
export const PORT = process.env.PORT || 4000;
export const DB_CONN_STRING = process.env.DB_CONN_STRING ||   'mongodb://mongo:27017/docker-node-mongo';
export const DOMAIN = process.env.DOMAIN || "pbid.io";
