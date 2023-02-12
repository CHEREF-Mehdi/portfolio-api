import { dbConnect, dbDisconnect } from '../data/dbConnexionSetUp';
import {
  aboutInitialState,
  contactInitialState,
  portfolioInitialState,
  servicesInitialState,
  testimonialInitialState,
  resumeInitialState
} from './initialStates';
import {
  AboutModel,
  ContactModel,
  ServiceModel,
  PortfolioModel,
  TestemonialModel,
  ResumeListModel,
} from '../data/models';
import { IResumeList } from '../data/dataTypes';

// const aboutSeeds = async () => {
//   const about = new AboutModel(aboutInitialState);
//   await about.save();
//   console.log('Insert about');
// };

// const contactSeeds = async () => {
//   const contact = new ContactModel(contactInitialState);
//   await contact.save();
//   console.log('Insert contact');
// };

// const serviceSeeds = async () => {
//   await ServiceModel.insertMany(servicesInitialState);
//   console.log('Insert Services');
// };

// const portfolioSeeds = async () => {
//   await PortfolioModel.insertMany(portfolioInitialState);
//   console.log('Insert Portfolio');
// };

// const testimonialSeeds = async () => {
//   await TestemonialModel.insertMany(testimonialInitialState);
//   console.log('Insert Testimonials');
// };

// const resumeListSeeds = async (resumeList: IResumeList) => {
//   await ResumeListModel.customInsert(resumeList);
//   console.log('Resume list added');
// };

const allSeeds = async () => {
  try {
    // connect to DB
    await dbConnect();

    // await aboutSeeds();

    // await contactSeeds();

    // await serviceSeeds();

    // await portfolioSeeds();

    // await testimonialSeeds();

    // await resumeListSeeds(resumeInitialState.proExperience);
    // await resumeListSeeds(resumeInitialState.personalProject);
    // await resumeListSeeds(resumeInitialState.organizations);
    // await resumeListSeeds(resumeInitialState.education);
    // await resumeListSeeds(resumeInitialState.scientificPapers);

    // Disconnect from DB
    dbDisconnect();
  } catch (error) {
    console.log(error);
  }
};

// allSeeds();

const getData = async () => {
  try {
    await dbConnect();

    // about
    const about = await AboutModel.findOne();

    const contact = await ContactModel.findOne();

    const services = await ServiceModel.find();

    const portfolio = await PortfolioModel.find();

    const testemonial = await TestemonialModel.find();

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
    console.log(scientificPapers);

    dbDisconnect();
  } catch (error) {
    console.log(error);
  }
};

// getData();
