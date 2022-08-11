import React from "react";
import "./App.css";
import "./Explore.css";

import logo from "./Bookverse_logo.svg";
import { Link } from "react-router-dom";

export default function Navigation() {
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
            <li className="nav-item dropdown">
              <Link
                className="nav-link px-5"
                to="/myCollection"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Collection
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link px-5">Quotes</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
