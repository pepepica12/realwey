import express from 'express';
import { analyticsMiddleware } from './lib/analytics.js';

const app = express();

// Enable Vercel Web Analytics
app.use(analyticsMiddleware());

app.get('/api/env', (req, res) => {
  res.json({ secret: process.env.VERCEL_PLATFORM_PROTECTION || 'not set' });
});

export default app;
