const express = require('express');
const { inject } = require('@vercel/analytics');
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Vercel Web Analytics
inject();

app.get('/', (req, res) => {
  res.send('Servidor realway.js activo y trazable');
});

app.listen(PORT, () => {
  console.log(`Servidor realway.js corriendo en puerto ${PORT}`);
});
