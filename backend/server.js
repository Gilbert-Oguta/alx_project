const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
console.log('MongoDB URI:', uri); // Verifying the URI

mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

  const vehiclesRouter = require('./routes/vehicles');
  const usersRouter = require('./routes/users');
  
  app.use('/vehicles', vehiclesRouter);
  app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

