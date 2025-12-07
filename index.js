const express = require('express');
const { inject } = require('@vercel/analytics');
const app = express();
const port = process.env.PORT || 3000;

// Initialize Vercel Web Analytics
inject();

app.get('/', (req, res) => {
  res.send('Servicio Railway activo y funcional');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
