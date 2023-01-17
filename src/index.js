import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";
import { connectToServer } from "./mongoDB.js";

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await connectToServer();

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

startServer();
