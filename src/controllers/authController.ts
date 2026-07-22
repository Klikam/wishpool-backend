import type { Request, Response } from 'express';
import { auth } from '@/lib/auth.js';
import { fromNodeHeaders } from 'better-auth/node';

export const getSession = async (req: Request, res: Response) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  return res.json(session);
};
