import express from 'express';
import * as cors from 'cors';
import morgan from 'morgan';

const app = express();

const port = process.env.PORT || 8080; // default port to listen

const client: string = undefined;
const whitelist: string[] = [client];

// options for cors midddleware
const corsOptions: cors.CorsOptions = {
  origin(origin, callback) {
    console.log(origin);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
};

// logger
app.use(morgan('common'));

if (process.env.DEV === '1') {
  console.log('development cors mode');
  app.use(cors.default());
} else {
  console.log('production cors mode');
  // use cors middleware
  app.use(cors.default(corsOptions));
}

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello world!!');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
