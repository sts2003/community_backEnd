import TipsBoard from "../../../model/TipsBoard";
import { CURRENT_TIME } from "../../../../src/Utils/comminUtils";

export default {
  Query: {
    getAllTips: async (_, args) => {
      try {
        const result = await TipsBoard.find({}, {});

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
  Mutation: {
    createTipsBoard: async (_, args) => {
      const { title, description } = args;
      const current = await CURRENT_TIME();
      try {
        const result = await TipsBoard.create({
          title,
          description,
          createdAt: current,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    updateTipsBoard: async (_, args) => {
      const { id, title, description } = args;
      try {
        const result = await TipsBoard.updateOne(
          { _id: id },
          {
            $set: {
              title,
              description,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deleteTipsBoard: async (_, args) => {
      const { id } = args;
      try {
        const result = await TipsBoard.deleteOne({ _id: id });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
