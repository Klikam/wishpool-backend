import mongoose from 'mongoose';
import { dbConfig } from './config.js';

const connectDB = async () => {
  if (!dbConfig.uri) {
    throw new Error('Undefined DB connection string');
  }
  await mongoose.connect(dbConfig.uri);
};

export { connectDB };
