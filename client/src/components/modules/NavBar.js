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
import { FaRegQuestionCircle } from "react-icons/fa";
import Popup from "../../../../node_modules/reactjs-popup";
import PopupPage from "./PopupPage.js";

import "./NavBar.css";
import Login from "./Login.js";
import appleicon from "./images/apple_icon.png";
import homeicon from "./images/home_icon.png";
import runnericon from "./images/runner_icon.png";
import { IoIosCloseCircleOutline } from "react-icons/io";

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "670940664828-uil6in2dfnfse28fvsuc1tp93g5gv63e.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {
  const [exerciseInst, setExerciseInst] = useState(false);
  const [nutritionInst, setNutritionInst] = useState(false);
  const [homeInst, setHomeInst] = useState(false);
  const [helpInst, setHelpInst] = useState(false);

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
            <GoogleLogin onSuccess={props.handleLogin} onError={(err) => console.error(err)} />
          )}
        </GoogleOAuthProvider>
      </div>

      <div>
        <Popup
          trigger={
            <FaRegQuestionCircle
              className="w-10 h-10 mr-4 text-white hover:text-gray-200"
              onMouseEnter={() => setHelpInst(true)}
              onMouseLeave={() => setHelpInst(false)}
            />
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal grid place-items-center">
              <div className="content  w-screen h-96 ">
                <PopupPage />
              </div>
              <div className="pt-3">
                <IoIosCloseCircleOutline
                  className="w-9 h-9 text-gray-200 hover:text-red-600"
                  onClick={() => close()}
                />
              </div>
            </div>
          )}
        </Popup>
      </div>
      {helpInst && <div className="absolute right-40 mr-3.5 top-14 text-xs w-12 h-12 text-white">Help</div>}
      <a href="/">
        <IoHome
          className="w-10 h-10 mr-4 text-white hover:text-gray-200"
          onMouseEnter={() => setHomeInst(true)}
          onMouseLeave={() => setHomeInst(false)}
        />
      </a>
      {homeInst && <div className="absolute right-28 mr-2.5 top-14 text-xs w-12 h-12 text-white">Home</div>}
      <a href="/exercises">
        <FaRunning
          className="w-10 h-10 mr-4 text-white hover:text-gray-200"
          onMouseEnter={() => setExerciseInst(true)}
          onMouseLeave={() => setExerciseInst(false)}
        />
      </a>
      {exerciseInst && (
        <div className="absolute right-16 mr-3 top-14 text-xs w-12 h-12 text-white">Exercises</div>
      )}
      <a href="/nutrition">
        <FaUtensils
          className="w-10 h-10 text-white hover:text-gray-200"
          onMouseEnter={() => setNutritionInst(true)}
          onMouseLeave={() => setNutritionInst(false)}
        />
      </a>
      {nutritionInst && <div className="absolute right-4 text-xs top-14 w-12 h-12 text-white">Nutrition</div>}
      <div className="NavBar-linkContainer flex py-3 mt-3 items-center"></div>
      {/* <nav className="NavBar-container u-inlineBlock">

      </nav> */}
    </div>
  );
};

export default NavBar;
