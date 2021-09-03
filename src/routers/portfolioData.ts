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
    about: aboutInitialState,
    contact: contactInitialState,
    services: servicesInitialState,
    resume: {
      proExperience: proExperienceInitialState,
      personalProject: personalProjectInitialState,
      education: educationInitialState,
      scientificPapers: scientificPapersInitialState,
      organizations: organizationInitialState,
    },
    portfolio: portfolioInitialState,
    testimonials: testimonialInitialState,
  });
});

export default router;
