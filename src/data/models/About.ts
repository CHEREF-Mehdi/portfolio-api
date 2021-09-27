import { model, Model, Document, Schema } from 'mongoose';
import { IAbout } from '../dataTypes';

interface IAboutDocument extends IAbout, Document {}
interface IAboutModel extends Model<IAboutDocument> {}

const AboutSchema = new Schema<IAboutDocument, IAboutModel>(
  {
    imgUrl: String,
    description: String,
    name: String,
    age: String,
    songs: [{ artist: String, url: String }],
    book: String,
    location: String,
    jobTitle: String,
    quotes: [String],
    socialMedia: [{ cssClass: String, link: String, icon: String }],
  },
  { collection: 'about' }
);

export const AboutModel = model('About', AboutSchema);
