import mongoose from "mongoose";

const Recipe = mongoose.model('Recipe');

const resolvers = {
  Query: {
    recipe: async (_, { ID }) => await Recipe.findById(ID),
    getRecipes: async () => await Recipe.find().sort({ createdAt: -1 }),
  },
  Mutation: {
    addRecipe: async (_, { recipeArgs: { name, description } }) => {
      const newRecipe = new Recipe({
        name,
        description,
        upvote: 0,
        createdAt: new Date(),
        downvote: 0,
      });

      const result = await newRecipe.save();

      return result;
    },
    deleteRecipe: async (_, { ID }) => {
      const { deletedCount } = await Recipe.deleteOne({ _id: ID });
      if (deletedCount) return true;
      else return false;
    },
    editRecipe: async (_, { ID, recipeArgs: { name, description } }) => {
      const { modifiedCount } = await Recipe.updateOne(
        { _id: ID },
        { name: name, description: description }
      );
      if (modifiedCount) return true;
      else return false;
    },
  },
};

export default resolvers;
