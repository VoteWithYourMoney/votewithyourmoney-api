import * as bodyParser from 'body-parser';

import cors, { CorsOptions } from 'cors';
import express, { Router } from 'express';

import path from 'path';

const app = express();

const corsOptions: CorsOptions = {
  optionsSuccessStatus: 204,
  origin: [
    'http://localhost:8080',
    'http://localhost:3000'
  ]
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const api = Router();

api.get(`/`, async (req, res) => {
    res.json({ test: true});
  });

app.use('/api', api);


app.listen(8080, () => {
  console.log(`🚀 Express server available at http://localhost:8080`);
});
