import express from 'express';
import { analyticsMiddleware } from './lib/analytics.js';

const app = express();
const port = process.env.PORT || 3000;

// Enable Vercel Web Analytics
app.use(analyticsMiddleware());

app.get('/', (req, res) => {
  res.send('Servicio Railway activo y funcional');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
