import { Router } from 'express';
import { findMany } from '../controllers/wishlistController.js';

const router: Router = Router();

router.get('/', findMany);

export default router;
