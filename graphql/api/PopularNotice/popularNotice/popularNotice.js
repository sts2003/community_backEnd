import PopularNorice from "../../../model/PopularNotice";

export default {
  Query: {
    getPopularNotice: async (_, args) => {
      try {
        const result = await PopularNorice.find({}, {});

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
};
