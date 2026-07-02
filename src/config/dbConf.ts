import mongoose from 'mongoose';
import { dbConfig } from './config.js';

const connectDB = () => {
  try {
    if (!dbConfig.uri) {
      throw new Error('Undefined DB connecttion string');
    }
    mongoose.connect(dbConfig.uri);
  } catch (err) {
    console.log(err);
  }
};

export { connectDB };
