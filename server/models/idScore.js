const mongoose = require("mongoose");

//define a story schema for the database
const IdScoreSchema = new mongoose.Schema({
  creator_id: String,
  scores: Object,
});

// compile model from schema
module.exports = mongoose.model("idScore", IdScoreSchema);