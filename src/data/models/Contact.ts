import { model, Model, Document, Schema } from 'mongoose';
import { IContact } from '../dataTypes';

interface IContactDocument extends IContact, Document {}
interface IContactModel extends Model<IContactDocument> {}

const AboutSchema = new Schema<IContactDocument, IContactModel>(
  {
    email1: String,
    email2: String,
    adress: String,
    tel: String,
    call: String,
    malt: String,
  },
  { collection: 'contact' }
);

export const ContactModel = model('Contact', AboutSchema);
