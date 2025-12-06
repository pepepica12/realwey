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
