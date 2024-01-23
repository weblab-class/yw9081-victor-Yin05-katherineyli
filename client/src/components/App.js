import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./modules/NavBar.js";
import Login from "./modules/Login.js";
import { Router } from "react-router-dom";
import Log from "./pages/Log.js";
import NotFound from "./pages/NotFound.js";
import Nutrition from "./pages/Nutrition.js";
import Skeleton from "./pages/Skeleton.js";
import Exercises from "../components/pages/Exercises";
import Home from "./pages/Home.js";

import jwt_decode from "jwt-decode";
import "../utilities.css";
import { socket } from "../client-socket.js";
import { get, post } from "../utilities";
import user from "../../../server/models/user.js";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };
  return (
    <>
      <NavBar userId={userId} handleLogin={handleLogin} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercises" element={<Exercises />}></Route>
        <Route path="/nutrition" element={<Nutrition userId={userId} />}></Route>
      </Routes>
    </>
  );
};

export default App;
