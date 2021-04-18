import { Router } from 'express';
import { getPersons } from '../controllers/personController';
export const personRouter = Router();

/**
 * @swagger
 * /api/person:
 *  get:
 *    description: Use to request all person
 *    responses:
 *      '200':
 *        description: A successful response
 */
personRouter.get('/', getPersons);
