import FreeBoard from "../../../model/FreeBoard";
import { CURRENT_TIME } from "../../../../src/Utils/comminUtils";

export default {
  Query: {
    getFreeBoard: async (_, args) => {
      try {
        const result = await FreeBoard.find({}, {});

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getFreeDetail: async (_, args) => {
      const { id } = args;

      console.log(id);
      try {
        const freeDetailDatum = await FreeBoard.findOne({ _id: id });

        return freeDetailDatum;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  },

  Mutation: {
    createFree: async (_, args) => {
      const { title, description } = args;
      const current = await CURRENT_TIME();
      try {
        const result = await FreeBoard.create({
          title,
          description,
          createdAt: current,
          isDelete: false,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deleteFree: async (_, args) => {
      const { id } = args;

      console.log(id);

      try {
        const result = await FreeBoard.deleteOne({ _id: id });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    updateFree: async (_, args) => {
      try {
        const { id, title, description } = args;

        const result = await FreeBoard.updateOne(
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
