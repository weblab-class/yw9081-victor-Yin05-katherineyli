const mongoose = require("mongoose");

//define a story schema for the database
const NutritionSchema = new mongoose.Schema({
  creator_id: String,
  content: String,
  date: Number,
  calories: Number,
});

// compile model from schema
module.exports = mongoose.model("nutrition", NutritionSchema);
