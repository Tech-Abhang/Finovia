const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
})

// Connect to MongoDB
mongoose.connect(MONGO_URL)