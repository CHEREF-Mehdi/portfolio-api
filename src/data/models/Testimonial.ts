import { model, Model, Document, Schema } from 'mongoose';
import { ITestimonialItem } from '../dataTypes';

interface ITestemonialDocument extends ITestimonialItem, Document {}
interface ITestemonialModel extends Model<ITestemonialDocument> {}

const TestimonialSchema = new Schema<ITestemonialDocument, ITestemonialModel>(
  {
    name: String,
    title: String,
    img: String,
    url: String,
    testimonial: String,
  },
  { collection: 'testimonial' }
);

export const TestemonialModel = model('Testimonial', TestimonialSchema);
