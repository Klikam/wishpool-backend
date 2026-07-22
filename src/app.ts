import express, { type Express } from 'express';
import cors from 'cors';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth.js';
import { requestLogger } from './middlewares/reqResLogger.js';
import { errorHandler } from './middlewares/errorHandler.js';
import wishlistRouter from './routes/wishlistRoutes.js';

const app: Express = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

// Auth -> must be before express.json()
app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json());

// Logger -> must be before routes
app.use(requestLogger);

// Routes
app.use('/api/wishlists', wishlistRouter);

// Global error handling
app.use(errorHandler);

export default app;
