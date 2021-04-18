import express, { Application } from 'express';
import api from './api';
import morgan from 'morgan';

const port: any = process.env.PORT || 8000;
const app: Application = express();

app.use(morgan('dev'));
app.use('/api', api);

app.listen(port, () => {
	console.log(`> Server Started in port ${port}`);
});
