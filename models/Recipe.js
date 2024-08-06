import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  createdAt: String,
  upvote: Number,
  downvote: Number,
});

// mongoose.model(Recipe, recipeSchema);
mongoose.model("Recipe", recipeSchema)
