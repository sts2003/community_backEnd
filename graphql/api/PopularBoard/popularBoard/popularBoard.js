import PopularBoard from "../../../model/PopularBoard";

export default {
  Query: {
    getPopularBoard: async (_, args) => {
      const { searchValue, limit, currentPage } = args;

      try {
        const result = await PopularBoard.find(
          {
            $or: [
              { title: { $regex: `.*${searchValue}.*` } },
              { description: { $regex: `.*${searchValue}.*` } },
            ],
          },
          {}
        )
          .limit(limit)
          .skip(currentPage * limit);

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
  },
};
