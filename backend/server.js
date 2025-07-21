require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const scanRoutes = require('./routes/scan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use('/api', scanRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.get('/ar', (req, res) => {
  res.send('AR page is working!');
});
  
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
