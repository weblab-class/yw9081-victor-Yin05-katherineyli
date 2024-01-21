import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get, post } from "../../utilities";
// import GoogleLogin, { GoogleLogout } from "react-google-login";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "./NavBar.css";
import Login from "./Login.js";

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "670940664828-uil6in2dfnfse28fvsuc1tp93g5gv63e.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {

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
    <nav className="NavBar-container">
      <div className="NavBar-linkContainer">
        <div>
          <Link to="/" className="NavBar-link">
            Home
          </Link>
        </div>
        {/* {props.userId && (
          <Link to={`/profile/${props.userId}`} className="NavBar-link">
            Profile
          </Link>
        )} */}
        <div>
          <Link to="/log/" className="NavBar-link">
            Log
          </Link>
        </div>
        <div>
          <Link to="/nutrition/" className="NavBar-link">
            Nutri
          </Link>
        </div>

        {/* {props.userId ? (
          <googleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={props.handleLogout}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={props.handleLogin}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        )} */}
      </div>
      <div>
        <Login path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
      </div>
    </nav>
  );
};

export default NavBar;
