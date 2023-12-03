require('dotenv').config();

const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;