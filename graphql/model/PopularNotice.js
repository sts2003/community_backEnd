import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PopularNotice = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`PopularNotice`, PopularNotice, `PopularNotice`);
