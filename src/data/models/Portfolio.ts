import { model, Model, Document, Schema } from 'mongoose';
import { IPortfolioItem } from '../dataTypes';

interface IPortfolioDocument extends IPortfolioItem, Document {}
interface IPortfolioModel extends Model<IPortfolioDocument> {}

const AboutSchema = new Schema<IPortfolioDocument, IPortfolioModel>(
  {
    img: String,
    link: { type: String, default: undefined, required: false },
    filter: String,
  },
  { collection: 'portfolio' }
);

export const PortfolioModel = model('Portfolio', AboutSchema);
