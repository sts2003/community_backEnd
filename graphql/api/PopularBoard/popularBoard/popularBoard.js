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
  },
};
