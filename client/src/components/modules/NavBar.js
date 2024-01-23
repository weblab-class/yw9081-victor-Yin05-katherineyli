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

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "670940664828-uil6in2dfnfse28fvsuc1tp93g5gv63e.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {
  return (
    <div className="NavBar">
      <div className="NavBar-login">
        {/* <Login path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} /> */}
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          {props.userId ? (
            <button
              className="LoginButton"
              onClick={() => {
                googleLogout();
                props.handleLogout();
              }}
            >
              Logout
            </button>
          ) : (
            <GoogleLogin onSuccess={props.handleLogin} onError={(err) => console.log(err)} />
          )}
        </GoogleOAuthProvider>
      </div>
      <nav className="NavBar-container u-inlineBlock">
        <div className="NavBar-linkContainer u-inlineBlock">
          <Link to="/" className="NavBar-link">
            Home
          </Link>
          <Link to="/exercises" className="NavBar-link">
            Exercises
          </Link>
          <Link to="/nutrition" className="NavBar-link">
            Nutri
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
