import express from 'express';
import { analyticsMiddleware, getAnalyticsScript } from './lib/analytics.js';

const app = express();
const port = process.env.PORT || 3000;

// Enable Vercel Web Analytics middleware
app.use(analyticsMiddleware());

// Middleware to parse JSON
app.use(express.json());

// HTML page with analytics tracking
app.get('/', (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Realwey - Servicio Railway</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .container {
          text-align: center;
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        h1 {
          color: #333;
          margin: 0 0 0.5rem 0;
        }
        p {
          color: #666;
          font-size: 1.1rem;
          margin: 0.5rem 0;
        }
        .status {
          display: inline-block;
          background: #4CAF50;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          font-weight: bold;
          margin-top: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Realwey</h1>
        <p>Servicio Railway activo y funcional</p>
        <p>🚀 Vercel Web Analytics habilitado</p>
        <div class="status">✓ Online</div>
      </div>
      ${getAnalyticsScript()}
    </body>
    </html>
  `;
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(htmlContent);
});

// API endpoint for environment status
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    service: 'realwey',
    timestamp: new Date().toISOString(),
    platform: process.env.PLATFORM || 'railway',
    analytics: 'enabled'
  });
});

// API endpoint for health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true, uptime: process.uptime() });
});

// Start server
app.listen(port, () => {
  console.log(`✓ Servidor escuchando en puerto ${port}`);
  console.log(`✓ Vercel Web Analytics habilitado`);
  console.log(`✓ Accede a http://localhost:${port}`);
});

export default app;
