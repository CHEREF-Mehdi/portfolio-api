import express from 'express';
import {
  aboutInitialState,
  contactInitialState,
  servicesInitialState,
  proExperienceInitialState,
  personalProjectInitialState,
  educationInitialState,
  scientificPapersInitialState,
  organizationInitialState,
  portfolioInitialState,
  testimonialInitialState,
} from '../data/initialStates';

const router = express.Router();

// Home page route.
router.get('/', (req, res) => {
  res.send({
    aboutInitialState,
    contactInitialState,
    servicesInitialState,
    proExperienceInitialState,
    personalProjectInitialState,
    educationInitialState,
    scientificPapersInitialState,
    organizationInitialState,
    portfolioInitialState,
    testimonialInitialState,
  });
});

export default router;
