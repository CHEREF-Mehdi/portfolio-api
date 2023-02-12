import express from 'express';
import * as cors from 'cors';
import morgan from 'morgan';
import apiRoutes from './routers';

const app = express();

const port = process.env.PORT || 8080; // default port to listen

const client: string = 'https://cheref-mehdi.github.io';
const whitelist: string[] = [client];

// options for cors midddleware
const corsOptions: cors.CorsOptions = {
  origin(origin, callback) {
    console.log({origin});
    if (process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  },
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
};

// cors
app.use(cors.default(corsOptions));

// logger
app.use(morgan('common'));

// parsing incoming requests with JSON payloads
app.use(express.json());

// api routes
app.use('/api', apiRoutes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
