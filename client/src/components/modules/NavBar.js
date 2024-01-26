import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { get, post } from "../../utilities";
import io from "socket.io-client";
// import GoogleLogin, { GoogleLogout } from "react-google-login";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import Exercises from "../pages/Exercises";
import { FaRunning } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";

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
    <div className="NavBar flex justify-end items-center mt-4 mr-4">
      <div className="mr-4">
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          {props.userId ? (
            <button
              className="LoginButton"
              onClick={() => {
                googleLogout();
                props.handleLogout();
              }}
            >
              <p className="bg-white mt-1 w-20 h-8 flex items-center justify-center mr-2 rounded-lg hover:bg-gray-200">
                Logout
              </p>
            </button>
          ) : (
            <GoogleLogin onSuccess={props.handleLogin} onError={(err) => console.log(err)} />
          )}
        </GoogleOAuthProvider>
      </div>

      <a href="/">
        <IoHome className="w-10 h-10 mr-4 text-white hover:text-gray-200" />
      </a>
      <a href="/exercises">
        <FaRunning className="w-10 h-10 mr-4 text-white hover:text-gray-200" />
      </a>
      <a href="/nutrition">
        <FaUtensils className="w-10 h-10 text-white hover:text-gray-200" />
      </a>

      <div className="NavBar-linkContainer flex py-3 mt-3 items-center"></div>
      {/* <nav className="NavBar-container u-inlineBlock">
        
      </nav> */}
    </div>
  );
};

export default NavBar;
