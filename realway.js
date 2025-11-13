const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Servidor realway.js activo y trazable');
});

app.listen(PORT, () => {
  console.log(`Servidor realway.js corriendo en puerto ${PORT}`);
});
