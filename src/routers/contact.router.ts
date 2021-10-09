import express from 'express';
import { ContactController } from '../controllers/Contact.controller';

const router = express.Router();

// Home page route.
router.post('/', ContactController.sendEmail);

export default router;
