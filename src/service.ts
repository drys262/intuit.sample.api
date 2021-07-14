import express from 'express';
import bodyParser from 'body-parser';
import { Server } from 'http';
import * as mongoose from './library/mongoose';
import routers from './routes';

let server: Server;

export async function start(): Promise<Server> {
  const app = express();

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );

  app.use('/', routers);

  const port = parseInt(process.env.PORT || '8080', 10);

  server = app.listen(port);

  await mongoose.start(process.env.MONGODB_URI);

  // eslint-disable-next-line no-console
  console.log(`Server bound to http://0.0.0.0:${port}`);

  return server;
}

export async function stop() {
  await new Promise((resolve) => server.close(resolve));
  await mongoose.stop();
}
