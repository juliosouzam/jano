/* eslint-disable no-console */
import { createConnection } from 'typeorm';

createConnection().then(() => console.log('Database ready'));
