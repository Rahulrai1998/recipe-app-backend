import mongoose from "mongoose";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";
import { ApolloServer } from "apollo-server";

const MONGODB =
  "mongodb+srv://rahulrai2822march:Exasperate@98@cluster0.o5tfwdd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
