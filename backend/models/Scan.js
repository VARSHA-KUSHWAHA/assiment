const mongoose = require('mongoose');

const scanSchema = new mongoose.Schema({
  ip: String,
  userAgent: String,
  timeSpent: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Scan', scanSchema);
