import News from "../../../model/News";

export default {
  Query: {
    getAllNewses: async (_, args) => {
      try {
        const result = await News.find({}, {});

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
};
