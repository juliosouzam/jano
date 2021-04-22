/* eslint-disable no-console */
import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';

import '../typeorm';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Running at PORT ${PORT}`));
