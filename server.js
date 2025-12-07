const express = require('express');
const { inject } = require('@vercel/analytics');
const app = express();

// Initialize Vercel Web Analytics
inject();

app.get('/api/env', (req, res) => {
  res.json({ secret: process.env.VERCEL_PLATFORM_PROTECTION || 'not set' });
});

module.exports = app;
