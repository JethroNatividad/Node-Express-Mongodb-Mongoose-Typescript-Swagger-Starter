import express, { Application } from 'express';
import api from './api';
import morgan from 'morgan';
import { databaseConfig } from './config';

databaseConfig();

const app: Application = express();
const port: number = 8000;

// express middleware handling the body parsing
app.use(express.json());

// express middleware handling the form parsing
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));
app.use('/api', api);

app.listen(port, () => {
	console.log(`> Server started on port ${port}`);
});
