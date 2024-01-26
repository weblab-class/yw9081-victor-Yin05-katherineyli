import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./modules/NavBar.js";
import Login from "./modules/Login.js";
import { Router } from "react-router-dom";
import Log from "./pages/Log.js";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Exercises from "../components/pages/Exercises";
import Home from "./pages/Home.js";
import HomeIcon from "./modules/HomeIcon.js";
import Nutrition from "./pages/Nutrition.js";

import jwt_decode from "jwt-decode";
import "../utilities.css";
import { socket } from "../client-socket.js";
import { get, post } from "../utilities";
import user from "../../../server/models/user.js";

import "./App.css";

/**
 * Define the "App" component
 */

const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [userScores, setUserScores] = useState({ core: 0, arms: 0, legs: 0, cardio: 0 });


  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  //get or post on mount based on whether user has scores yet or not
  // useEffect(() => {

  // }, [userId]);

  useEffect(() => {
    if (userId) {
      const query = { id: userId };
      get("/api/scores", query).then((anIdScore) => {
        console.log(anIdScore[0]);
        if (anIdScore.length !== 0) {
          setUserScores(anIdScore[0].scores);
          // console.log("MEOWMEOWMEOW");
          console.log(userScores);
        } else {
          // console.log("WOOFWOOFWOOF");
          const body = { id: userId };
          post("/api/scores", body);
        }
      });
    }
  }, [userId]);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      // console.log(user._id);
      return user;
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <div className="body">
      {/* {userScores.core}
      {userScores.arms}
      {userScores.legs}
      {userScores.cardio} */}
      <div className="flow-root">
        {/* <div className="u-inlineBlock">
          <HomeIcon />
        </div> */}
        <div className="u-inlineBlock float-right">
          <NavBar userId={userId} handleLogin={handleLogin} handleLogout={handleLogout} />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home userId = {userId} userScores = {userScores}/>}></Route>
        <Route
          path="/exercises"
          element={
            <Exercises userId={userId} userScores={userScores} setUserScores={setUserScores} />
          }
        ></Route>
        <Route path="/nutrition" element={<Nutrition userId={userId} />}></Route>
      </Routes>
    </div>
  );
};

export default App;
