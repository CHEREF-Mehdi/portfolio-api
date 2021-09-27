import express from 'express';
import PortfolioDataController from '../controllers/PortfolioData.controller';

const router = express.Router();

// Home page route.
router.get('/', PortfolioDataController.getData);

export default router;
