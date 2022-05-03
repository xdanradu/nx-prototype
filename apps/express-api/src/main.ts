/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { User } from '@mono-repo/shared';
import * as express from 'express';

let user: User;

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express-api!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
