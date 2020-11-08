import { Router } from 'express';
import { getTodos } from '../controllers/todoController';
export const todoRouter = Router();
todoRouter.get('/', getTodos);
