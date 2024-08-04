import { gql } from "apollo-server";

const typeDefs = gql`
  type Recipe {
    name: String
    description: String
    createdAt: String
    upvote: Int
    downvote: Int
  }

  type Query {
    recipe(ID: ID!): Recipe!
    getRecipes: [Recipe]
  }

  input RecipeArgs {
    name: String
    description: String
  }

  type Mutation {
    addRecipe(recipeArgs: RecipeArgs): Recipe!
    deleteRecipe(ID: ID!): Boolean
    editRecipe(ID: ID!, recipeArgs: RecipeArgs): Boolean
  }
`;

export default typeDefs;
