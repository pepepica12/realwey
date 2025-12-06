// 1. Importar Express
const express = require('express');

// 2. Initialize Vercel Web Analytics
const { inject } = require('@vercel/analytics');
inject();

// 3. Crear instancia de la app
const app = express();

// 4. Definir la ruta raíz
app.get('/', (req, res) => {
  res.send('Servidor activo y expuesto correctamente en Railway');
});

// 5. Definir el puerto dinámico para Railway
const PORT = process.env.PORT || 8080;

// 6. Activar el servidor
app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
