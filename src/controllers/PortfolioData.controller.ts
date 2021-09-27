import { NextFunction, Request, Response } from 'express';
import { dbConnect, dbDisconnect } from '../data/dbConnexionSetUp';
import {
  AboutModel,
  ContactModel,
  PortfolioModel,
  ResumeListModel,
  ServiceModel,
  TestemonialModel,
} from '../data/models';

class PortfolioDataController {
  static async getData(req: Request, res: Response, next: NextFunction) {
    try {
      await dbConnect();
      const about = await AboutModel.findOne();

      const contact = await ContactModel.findOne();

      const services = await ServiceModel.find();

      const portfolio = await PortfolioModel.find();

      const testemonials = await TestemonialModel.find();

      const proExperiences = await ResumeListModel.findOne({
        title: 'experience',
      }).populate('items');

      const personalProjects = await ResumeListModel.findOne({
        title: 'personal projects',
      }).populate('items');

      const education = await ResumeListModel.findOne({
        title: 'education',
      }).populate('items');

      const organization = await ResumeListModel.findOne({
        title: 'organization',
      }).populate('items');

      const scientificPapers = await ResumeListModel.findOne({
        title: 'Scientific Papers',
      }).populate('items');

      dbDisconnect();

      res.status(200).json({
        about: about,
        contact: contact,
        services: services,
        resume: {
          proExperience: proExperiences,
          personalProject: personalProjects,
          education: education,
          scientificPapers: scientificPapers,
          organizations: organization,
        },
        portfolio: portfolio,
        testimonials: testemonials,
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}

export default PortfolioDataController;
