import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { get, post } from "../../utilities";
import io from "socket.io-client";
// import GoogleLogin, { GoogleLogout } from "react-google-login";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import Exercises from "../pages/Exercises";

import "./NavBar.css";
import Login from "./Login.js";
import appleicon from "./images/apple_icon.png";
import homeicon from "./images/home_icon.png";
import runnericon from "./images/runner_icon.png";

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "670940664828-uil6in2dfnfse28fvsuc1tp93g5gv63e.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {
  return (
    <div className="NavBar flex justify-end items-center">
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        {props.userId ? (
          <button
            className="LoginButton"
            onClick={() => {
              googleLogout();
              props.handleLogout();
            }}
          >
            <p className="mt-8">Logout</p>
          </button>
        ) : (
          <GoogleLogin onSuccess={props.handleLogin} onError={(err) => console.log(err)} />
        )}
      </GoogleOAuthProvider>
      <nav className="NavBar-container u-inlineBlock">
        <div className="NavBar-linkContainer flex py-3">
          <a href="/">
            <img src={homeicon} alt="Home Icon" className="h-11 pl-3 pr-4"></img>
          </a>
          <a href="/exercises">
            <img src={runnericon} alt="Runner Icon" className="h-11 pr-5"></img>
          </a>
          <a href="/nutrition">
            <img src={appleicon} alt="Apple Icon" className="h-11"></img>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
