const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint raíz
app.get('/', (req, res) => {
  res.send('Backend maestro activo 🚀');
});

// Endpoint para exponer variable protegida
app.get('/api/env', (req, res) => {
  res.json({
    secret: process.env.VERCEL_PLATFORM_PROTECTION || "not found"
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
