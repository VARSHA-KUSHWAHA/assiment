const express = require('express');
const router = express.Router();
const Scan = require('../models/Scan');

router.post('/scan', async (req, res) => {
  const { timeSpent } = req.body;
  const scan = new Scan({
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    timeSpent
  });
  await scan.save();
  res.json({ success: true });
});

router.get('/analytics', async (req, res) => {
  try {
    const scans = await Scan.find();
    const totalScans = scans.length;

    const totalTime = scans.reduce((sum, scan) => sum + (scan.timeSpent || 0), 0);
    const avgTime = totalScans > 0 ? (totalTime / totalScans).toFixed(1) : 0;

    res.json({ totalScans, avgTime });
  } catch (error) {
    console.error('Analytics fetch error:', error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

module.exports = router;
