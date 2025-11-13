// 1. Importar Express
const express = require('express');

// 2. Crear instancia de la app
const app = express();

// 3. Definir la ruta raíz
app.get('/', (req, res) => {
  res.send('Servidor activo y expuesto correctamente en Railway');
});

// 4. Definir el puerto dinámico para Railway
const PORT = process.env.PORT || 8080;

// 5. Activar el servidor
app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
