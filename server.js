const express = require('express');
const app = express();

app.get('/api/env', (req, res) => {
  res.json({ secret: process.env.VERCEL_PLATFORM_PROTECTION || 'not set' });
});

module.exports = app;
