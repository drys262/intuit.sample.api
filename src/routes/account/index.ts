/* eslint-disable no-console */
import { Router } from 'express';
import createAccount from './create-account';
import getAccount from './get-account';

const router = Router();

router.get('/', getAccount);
router.post('/', createAccount);

export default router;
