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
  // getNewsDetail: async (_, args) => {
  //   const { id } = args;
  //   try {
  //     const result = await News.findOne({ _id: id });

  //     return result;
  //   } catch (e) {
  //     console.log(e);
  //     return {};
  //   }
  // },
};
