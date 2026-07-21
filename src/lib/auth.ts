import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import mongoose from 'mongoose';
import { dbConfig } from '../config/config.js';

const { MongoClient } = mongoose.mongo;
const client = new MongoClient(dbConfig.uri);

export const auth = betterAuth({
  database: mongodbAdapter(client.db(), { client }),
  trustedOrigins: ['http://localhost:5173'],
  emailAndPassword: {
    enabled: true,
  },
});
