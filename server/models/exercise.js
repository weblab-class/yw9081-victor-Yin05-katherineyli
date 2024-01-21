const mongoose = require("mongoose");

//define a story schema for the database
const ExerciseSchema = new mongoose.Schema({
  type: String,
  duration: Number,
  date: Date,
});

// compile model from schema
module.exports = mongoose.model("exercise", ExerciseSchema);
