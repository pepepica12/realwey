const express = require('express');

// Initialize Vercel Web Analytics
const { inject } = require('@vercel/analytics');
inject();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Servidor realway.js activo y trazable');
});

app.listen(PORT, () => {
  console.log(`Servidor realway.js corriendo en puerto ${PORT}`);
});
