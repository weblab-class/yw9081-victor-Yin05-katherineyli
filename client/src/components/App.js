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
  const [userScores, setUserScores] = useState(null);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  useEffect(() => {
    if (userId) {
      const query = { id: userId };
      get("/api/scores", query).then((anIdScore) => {
        if (anIdScore.length !== 0) {
          setUserScores(anIdScore[0].scores);
        } else {
          var body = { id: userId, theRequest: 0 };
          post("/api/scores", body);
          setUserScores({ cardio: 0, arms: 0, legs: 0, core: 0 });
        }
      });
    } else {
      setUserScores(null);
    }
  }, [userId]);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      return user;
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <div className="body overflow-none h-screen flex flex-col">
      <NavBar
        className="u-inlineBlock float-right"
        userId={userId}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<Home userId={userId} userScores={userScores} />}></Route>
        <Route
          path="/exercises"
          element={
            <Exercises userId={userId} userScores={userScores} setUserScores={setUserScores} />
          }
        ></Route>
        <Route
          path="/nutrition"
          element={
            <Nutrition userId={userId} userScores={userScores} setUserScores={setUserScores} />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
