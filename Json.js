const express = require('express');
const { inject } = require('@vercel/analytics');
inject();

const app = express();

app.get('/', (req, res) => {
  res.send('Servidor activo en Vercel');
});

app.get('/env', (req, res) => {
  res.json(process.env);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor activo en puerto ${PORT}`);
});
