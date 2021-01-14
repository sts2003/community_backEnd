import AnonymousBoard from "../../../model/AnonymousBoard";
import { CURRENT_TIME } from "../../../../src/Utils/comminUtils";

export default {
  Query: {
    getAllAnonymousBoard: async (_, args) => {
      try {
        const result = await AnonymousBoard.find({}, {});

        return result;
      } catch (e) {
        console.log(e);
      }
    },
  },

  Mutation: {
    createAnonymousBoard: async (_, args) => {
      const { title, description } = args;
      const current = await CURRENT_TIME();

      try {
        const result = await AnonymousBoard.create({
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

    deleteAnonymousBoard: async (_, args) => {
      const { id } = args;

      try {
        const result = await AnonymousBoard.deleteOne({ _id: id });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    updateAnonymousBoard: async (_, args) => {
      const { id, title, description } = args;

      try {
        const result = await AnonymousBoard.updateOne(
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
  },
};
