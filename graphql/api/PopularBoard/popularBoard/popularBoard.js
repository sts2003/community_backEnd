import PopularBoard from "../../../model/PopularBoard";

export default {
  Query: {
    getPopularBoard: async (_, args) => {
      try {
        const result = await PopularBoard.find({}, {});

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getPopularDetail: async (_, args) => {
      const { id } = args;
      console.log(id);
      try {
        const popularDetailDatum = await PopularBoard.findOne({ _id: id });

        return popularDetailDatum;
      } catch (e) {
        console.log(e);
        return {};
      }
    },

    getPopularTotalPage: async (_, args) => {
      const { searchValue, limit } = args;

      try {
        const result = await PopularBoard.find({
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

    getPopularTotalPageOnlyCnt: async (_, args) => {
      const { searchValue, limit } = args;

      try {
        const result = await PopularBoard.find({
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

    getPopularNextId: async (_, args) => {
      const { id } = args;
      console.log(id);

      try {
        const result = await PopularBoard.findOne({
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

    getPopularBeforeId: async (_, args) => {
      const { id } = args;
      console.log(id);

      try {
        const result = await PopularBoard.findOne({
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
  },
};
