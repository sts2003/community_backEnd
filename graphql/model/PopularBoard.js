import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PopularBoard = new Schema(
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

export default mongoose.model(`PopularBoard`, PopularBoard, `PopularBoard`);
