import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FreeBoard = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    createdAt: {
      type: String,
      required: true,
    },

    imagePath: {
      type: String,
      required: false,
    },

    email: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { versionKey: false }
);

export default mongoose.model(`FreeBoard`, FreeBoard, `FreeBoard`);
