import mongoose from "mongoose";
import typeDefs from "./graphql/typeDefs.js";

import { ApolloServer } from "apollo-server";

const MONGODB =
  "mongodb+srv://rahulrai2822march:Exasperate%4098@cluster0.o5tfwdd.mongodb.net/recipe-app?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });

import "./models/Recipe.js";
import resolvers from "./graphql/resolvers.js";
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
