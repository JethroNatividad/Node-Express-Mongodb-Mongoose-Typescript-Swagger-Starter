import express, { Application } from 'express';
import { personRouter, todoRouter } from './routes/';
import { SwaggerOptions } from 'swagger-ui-express';
import SwaggerJsDoc from 'swagger-jsdoc';
import SwaggerUI from 'swagger-ui-express';

const api: Application = express();
// You may add api specific middlewares here

/* Swagger */
const swaggerOptions: SwaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'Node Express Typescript Swagger Starter',
			description: 'Node Express Typescript Swagger Starter',
			servers: ['http://localhost:8000'],
		},
	},
	apis: ['dist/api/routes/*.js'],
};
api.use('/docs', SwaggerUI.serve);
api.use('/docs', SwaggerUI.setup(SwaggerJsDoc(swaggerOptions)));
/* Swagger */

api.use('/todos', todoRouter);
api.use('/person', personRouter);

export default api;
