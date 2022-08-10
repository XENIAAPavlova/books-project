import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Trending from "./Trending";
import MyCollection from "./MyCollection";
import Navigation from "./Navigation";
import Home from "./Home";

import "./App.css";
import logo from "./Bookverse_logo.svg";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="" />
        </Routes>
      </BrowserRouter>


      <footer className="App-footer">
        <small>
          This is an open-source code by
          <a
            href="https://github.com/XENIAAPavlova"
            target="blank"
            rel="noreferrer"
          >
            Xenia Pavlova
          </a>
        </small>
      </footer>
    </div>
  );
}
