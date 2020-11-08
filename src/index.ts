import express, { Application } from 'express';
import api from './api';
import morgan from 'morgan';
const app: Application = express();
app.use(morgan('dev'));
app.use('/api/v1', api);
app.listen(8000, () => {
  console.log('> Server Started');
});
