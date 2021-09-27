import express from 'express';
import portfoliRouter from './portfolioData.router';

const routes = express.Router();

routes.use('/portfolio', portfoliRouter);

export default routes;
