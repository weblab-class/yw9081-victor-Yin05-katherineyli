import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./modules/NavBar.js";
import Login from "./modules/Login.js";
import { Router } from "react-router-dom";
import Log from "./pages/Log.js";
import Nutrition from "./pages/Nutrition.js";
import NotFound from "./pages/NotFound.js";
import Nutrition from "./pages/Nutrition.js";
import Skeleton from "./pages/Skeleton.js";
import Exercises from "../components/pages/Exercises";
import Home from "./pages/Home.js"

import jwt_decode from "jwt-decode";
import "../utilities.css";
import { socket } from "../client-socket.js";
import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  return (
    // <Routes>
    //   <Route
    //     path="/"
    //     element={
    //       <Skeleton
    //         path="/"
    //         handleLogin={handleLogin}
    //         handleLogout={handleLogout}
    //         userId={userId}
    //       />
    //     }
    //   />
    //   <Route path="*" element={<NotFound />} />
    // </Routes>

    // <>
    //   <NavBar />
    //   <Exercises />
    // </>
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercises" element={<Exercises />}></Route>
        <Route path="/nutrition" element={<Nutrition />}></Route>
      </Routes>
    </>
  );
};

export default App;
