/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const IdScore = require("./models/idScore");
const User = require("./models/user");
const Exercise = require("./models/exercise");
const Nutrition = require("./models/nutritions");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.get("/scores", (req, res) => {
  IdScore.find({ creator_id: req.query.id }).then((anIdScore) => res.send(anIdScore));
});

router.post("/scores", (req, res) => {
  if (req.body.theRequest == 0) {
    const newIdScore = new IdScore({
      creator_id: req.body.id,
      scores: { core: 0, arms: 0, legs: 0, cardio: 0 },
    });
    newIdScore.save().then((anIdScore) => res.send(anIdScore));
  } else {
    IdScore.findOne({ creator_id: req.body.id }).then((anIdScore) => {
      anIdScore.scores = req.body.newScores;
      anIdScore.save().then((newIdScore) => {
        res.send(newIdScore);
      });
    });
  }
});

//issue: the sorting doesn't happen until after refreshing the exercises page
router.get("/exercises", (req, res) => {
  Exercise.find({ creator_id: req.query.id })
    .sort({ date: -1 })
    .then((exercises) => res.send(exercises));
});

router.post("/exercises", (req, res) => {
  const newExercise = new Exercise({
    creator_id: req.body.id,
    type: req.body.type,
    duration: req.body.duration,
    date: req.body.date,
  });

  newExercise.save().then((exercise) => res.send(exercise));
});

router.get("/nutrition", (req, res) => {
  // empty selector means get all documents
  Nutrition.find({ creator_id: req.query.id }).then((nutritions) => res.send(nutritions));
});

router.post("/nutrition", auth.ensureLoggedIn, (req, res) => {
  const newNutrition = new Nutrition({
    creator_id: req.body.id,
    content: req.body.content,
    date: req.body.date,
    calories: req.body.calories,
  });

  newNutrition.save().then((nutrition) => res.send(nutrition));
});

//issue: deleting the exercise doesn't render until refreshing the exercises page
//delete exercise
router.get("/deleteExercise", (req, res) => {
  Exercise.deleteOne({ _id: req.query.id }).then((exercise) => res.send(exercise));

});

router.get("/deleteNutrition", (req, res) => {
  Nutrition.deleteOne({ _id: req.query.id }).then((nutrition) => res.send(nutrition));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
