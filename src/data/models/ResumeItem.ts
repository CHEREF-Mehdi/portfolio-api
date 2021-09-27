import { model, Model, Document, Schema } from 'mongoose';
import { IResumeItem } from '../dataTypes';

interface IResumeItemDocument extends IResumeItem, Document {}
interface IResumeItemModel extends Model<IResumeItemDocument> {}

const ResumeItemSchema = new Schema<IResumeItemDocument, IResumeItemModel>(
  {
    title: String,
    year: { type: String, default: null, required: false },
    key: { type: String, default: undefined, required: false },
    content: [
      {
        describtion: String,
        tools: { type: String, default: null, required: false },
        links: [String],
        key: { type: String, default: undefined, required: false },
        abstract: { type: String, default: undefined, required: false },
      },
    ],
  },
  { collection: 'resumeItem' }
);

export const ResumeItemModel = model('ResumeItem', ResumeItemSchema);
