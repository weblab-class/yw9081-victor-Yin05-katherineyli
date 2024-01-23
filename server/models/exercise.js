const mongoose = require("mongoose");

//define a story schema for the database
const ExerciseSchema = new mongoose.Schema({
  creator_id: String,
  type: String,
  duration: Number,
  date: String,
});

// compile model from schema
module.exports = mongoose.model("exercise", ExerciseSchema);
