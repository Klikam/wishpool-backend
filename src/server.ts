import app from './app.js';
import { serverConfig } from './config/config.js';
import { connectDB } from './config/dbConf.js';

try {
  await connectDB();
} catch (err) {
  console.error('Failed to connect to database:', err);
  process.exit(1);
}

console.log('Connected to the database');
app.listen(serverConfig.port, () => {
  console.log(`Server running on port ${serverConfig.port}`);
});
