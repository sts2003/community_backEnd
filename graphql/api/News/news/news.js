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

    getNewsDetail: async (_, args) => {
      const { id } = args;
      try {
        const result = await News.findOne({ _id: id });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },

    getNewsNextId: async (_, args) => {
      const { id } = args;
      console.log(id);

      try {
        const result = await News.findOne({
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

    getNewsBeforeId: async (_, args) => {
      const { id } = args;
      console.log(id);

      try {
        const result = await News.findOne({
          _id: { $gt: id },
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
  },
};
