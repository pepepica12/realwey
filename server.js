// Re-export from index.js for Vercel compatibility
import app from './index.js';

export default app;
=======
mport { leerRSS } from "./rss.js";

const express = require('express');
const app = express();

app.get("/rss", leerRSS);
app.get('/api/env', (req, res) => {
  res.json({ secret: process.env.VERCEL_PLATFORM_PROTECTION || 'not set' });
});

module.exports = app;2d9ef45 (Agrego ruta /rss para leer feed RSS)
