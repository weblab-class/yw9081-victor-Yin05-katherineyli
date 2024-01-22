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
router.post("/exercise", (req, res) => {
  const newExercise = new Exercise({
    type: req.body.type,
    duration: req.body.duration,
    date: req.body.date,
  });

  newExercise.save().then((exercise) => res.send(exercise));
});

router.get("/exercises", (req, res) => {
  Exercise.find({}).then((exercises) => res.send(exercises));
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
  console.log(req.body.date);

  newNutrition.save().then((nutrition) => res.send(nutrition));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
