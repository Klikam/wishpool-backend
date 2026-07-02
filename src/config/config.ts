import dotenv from 'dotenv';

dotenv.config();

interface ServerConfig {
  port: number;
  nodeEnv: string;
}

const serverConfig: ServerConfig = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
};

interface DBConfig {
  uri: string;
}

const dbConfig: DBConfig = {
  uri: process.env.DB_CONNECTION_STRING || '',
};

export { serverConfig, dbConfig };
