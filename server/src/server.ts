import { errors } from 'celebrate';
import cors from 'cors';
import express from 'express';
import path from 'path';
import routes from './routes';

require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/statics', express.static(path.resolve(__dirname, '..', 'statics')));
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(Number(process.env.APP_PORT));
