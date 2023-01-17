import { db } from "./mongoDB.js";

export const resolvers = {
  Query: {
    itemsByModName: (_, { modName }) => {
      return db.collection("items").find({ modName: modName }).toArray();
    },
    availableItemLists: () => {
      return db.collection("items").distinct("modName");
    },
    availableCraftings: () => {
      return db.collection("craftings").find({}).toArray();
    },
    craftingByName: (_, { name }) => {
      return db.collection("craftings").findOne({ name: name });
    },
  },
};
