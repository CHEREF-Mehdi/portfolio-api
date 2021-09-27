import { model, Model, Document, Schema } from 'mongoose';
import { IServiceItem } from '../dataTypes';

interface IServiceDocument extends IServiceItem, Document {}
interface IServiceModel extends Model<IServiceDocument> {}

const ServiceSchema = new Schema<IServiceDocument, IServiceModel>(
  {
    detail: String,
    icon: String,
    name: String,
  },
  { collection: 'service' }
);

export const ServiceModel = model('Service', ServiceSchema);
