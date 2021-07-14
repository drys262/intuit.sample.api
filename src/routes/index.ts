import { Router } from 'express';
import accountRoutes from './account';

const router = Router();

router.use('/account', accountRoutes);

export default router;
