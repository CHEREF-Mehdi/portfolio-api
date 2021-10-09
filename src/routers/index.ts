import express from 'express';
import contactRouter from './contact.router';
import portfoliRouter from './portfolioData.router';

enum paths {
  PORTFOLIO = '/portfolio-data',
  CONTACT = '/contact',
}

const routes = express.Router();

routes.use(paths.PORTFOLIO, portfoliRouter);
routes.use(paths.CONTACT, contactRouter);

export default routes;
