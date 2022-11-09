import React, { useEffect, useState } from "react";
import "./App.css";
import "./Explore.css";
import "./Navigation.css";
import logo from "./Bookverse_logo.svg";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function Navigation() {
  const [user, setUser] = useState(null);

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("login-button").hidden = true;

    window.localStorage.setItem("google_auth_user", JSON.stringify(userObject));
  }

  function handleSignOut(event) {
    setUser(null);
    document.getElementById("login-button").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("login-button"), {
      theme: "outline",
      size: "large",
    });
    // fetch user data
    let userObject = JSON.parse(
      window.localStorage.getItem("google_auth_user")
    );
    setUser(userObject);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light ps-5 pe-5 mt-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" width="75" height="75" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link px-5" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-5" to="/trending">
                Trending
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-5" to="/myCollection" role="button">
                My Collection
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-5" to="/Quotes">
                Quotes
              </Link>
            </li>
          </ul>
          {!user && <div id="login-button"></div>}
          {user && (
            <button
              id="signout-button"
              type="button"
              className="btn px-5"
              onClick={(e) => handleSignOut(e)}
            >
              Sign Out
            </button>
          )}
        </div>
        {user && (
          <div>
            <img id="login-pic" alt="google-login-pic" src={user.picture}></img>
            <h3>{user.given_name}</h3>
          </div>
        )}
      </div>
    </nav>
  );
}
