import mongoose from "mongoose";

const Schema = mongoose.Schema;

const News = new Schema(
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

export default mongoose.model(`News`, News, `News`);
