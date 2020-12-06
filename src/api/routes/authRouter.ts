import { Router } from 'express';
import { signup, signin } from '../controllers/authController';
export const authRouter = Router();
// /auth
authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
