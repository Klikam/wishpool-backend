import app from './app.js';
import { serverConfig } from './config/config.js';
import { connectDB } from './config/dbConf.js';
import mongoose from 'mongoose';

connectDB();
mongoose.connection.once('open', () => {
  console.log('Connected to the database');
  app.listen(serverConfig.port, () => {
    console.log(`Server running on port ${serverConfig.port}`);
  });
});
