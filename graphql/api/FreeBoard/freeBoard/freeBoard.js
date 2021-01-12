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

    getFreeNextId: async (_, args) => {
      const { id } = args;
      console.log(id);

      try {
        const result = await FreeBoard.findOne({
          _id: { $lt: id },
        })
          .sort({
            createdAt: -1,
          })
          .limit(1);

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },

    getFreeBeforeId: async (_, args) => {
      const { id } = args;
      console.log(id);

      try {
        const result = await FreeBoard.findOne({
          _id: { $gt: id },
        })
          .sort({
            createdAt: 1,
          })
          .limit(1);

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
    getFreeTotalPage: async (_, args) => {
      const { searchValue, limit } = args;

      try {
        const result = await FreeBoard.find({
          title: { $regex: `.*${searchValue}.*` },
        });

        const cnt = result.length;

        const realTotalPage = cnt % limit > 0 ? cnt / limit + 1 : cnt / limit;

        console.log(realTotalPage);
        return parseInt(realTotalPage);
      } catch (e) {
        console.log(e);
        return 0;
      }
    },

    getFreeTotalPageOnlyCnt: async (_, args) => {
      const { searchValue, limit } = args;

      try {
        const result = await FreeBoard.find({
          title: { $regex: `.*${searchValue}.*` },
        });

        const cnt = result.length;
        console.log(result);

        return parseInt(cnt);
      } catch (e) {
        console.log(e);
        return 0;
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
