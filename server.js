// 1. Importar Express
const express = require('express');

// 2. Inicializar Vercel Web Analytics
const { inject } = require('@vercel/analytics');
inject();

// 3. Crear instancia de la aplicación
const app = express();

// 4. Definir la ruta raíz
app.get('/', (req, res) => {
  res.send('Servidor activo en Vercel');
});

// 5. Endpoint /env para auditoría
app.get('/env', (req, res) => {
  res.json(process.env);
});

// 6. Definir el puerto dinámico
const PUERTO = process.env.PUERTO || process.env.PORT || 3000;

// 7. Activar el servidor
app.listen(PUERTO, () => {
  console.log(`Servidor activo en puerto ${PUERTO}`);
});
