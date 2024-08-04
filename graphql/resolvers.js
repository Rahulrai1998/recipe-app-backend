import mongoose from "mongoose";

const Recipe = mongoose.model("Recipe");

const resolvers = {
  Query: {
    recipe: async (_, { ID }) => await Recipe.findById(ID),
    getRecipes: async () => await Recipe.find().sort({ createdAt: -1 }),
  },
  Mutation: {
    createRecipe: async (_, { recipeArgs: { name, description } }) => {},
  },
};

export default resolvers;
