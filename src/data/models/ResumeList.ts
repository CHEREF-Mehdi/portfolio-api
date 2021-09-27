import { model, Model, Document, Schema } from 'mongoose';
import { ResumeItemModel } from '.';
import { IResumeList } from '../dataTypes';

interface IResumeListDocument extends IResumeList, Document {}

interface IResumeListModel extends Model<IResumeListDocument> {
  customInsert: (resumetList: IResumeList) => Promise<void>;
}

const ResumeListSchema = new Schema<IResumeListDocument, IResumeListModel>(
  {
    title: String,
    icon: String,
    mapLinks: {
      type: String,
      enum: ['TOP', 'BOTTOM'],
      default: undefined,
      required: false,
    },
    selectedItem: { type: Number, default: undefined, required: false },
    items: [{ type: Schema.Types.ObjectId, ref: 'ResumeItem' }],
  },
  { collection: 'resumeList', }
);

ResumeListSchema.statics.customInsert = async (
  resumetList: IResumeList
) => {
  const rItems = await Promise.all(
    resumetList.items.map(async (item) => {
      const resumetItem = new ResumeItemModel(item);
      await resumetItem.save();
      return resumetItem;
    })
  );

  const _ids = rItems.map((item) => item._id as Schema.Types.ObjectId);
  const resumeList = new ResumeListModel({ ...resumetList, items: _ids });
  return resumeList.save();
};

export const ResumeListModel = model('ResumeList', ResumeListSchema);
