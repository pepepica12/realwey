import express from "express";
import app from "./index.js";
import { leerRSS } from "./rss.js";

const server = express();

// Montar la app original
server.use(app);

// Ruta RSS
server.get("/rss", leerRSS);

// Exportar para Railway / Vercel
server.get("/", (req, res) => {
  res.send("Backend activo");
});
export default server;
