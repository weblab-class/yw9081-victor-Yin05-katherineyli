import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./modules/NavBar.js";
import Login from "./modules/Login.js"
import { Router } from "react-router-dom";
import Log from "./pages/Log.js";
import Nutrition from "./pages/Nutrition.js";
import NotFound from "./pages/NotFound.js";

import jwt_decode from "jwt-decode";
import "../utilities.css";
import { socket } from "../client-socket.js";
import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {

  return (
    <>
      <NavBar />
    </>
  );
};

export default App;
