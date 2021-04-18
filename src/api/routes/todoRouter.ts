import { Router } from 'express';
import { getTodos } from '../controllers/todoController';
export const todoRouter = Router();

/**
 * @swagger
 * /api/todos:
 *  get:
 *    description: Use to request all todos
 *    responses:
 *      '200':
 *        description: A successful response
 */
todoRouter.get('/', getTodos);
