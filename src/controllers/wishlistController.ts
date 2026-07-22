import type { Request, Response, NextFunction } from 'express';

const WISHLITS_MOCK = ['test wishlist 1', 'test wishlist 2'];

export const findMany = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.json(WISHLITS_MOCK);
  } catch (err) {
    next(err);
  }
};
