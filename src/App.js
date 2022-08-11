import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Trending from "./Trending";
import Navigation from "./Navigation";
import Home from "./Home";
import MyCollection from "./MyCollection";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/myCollection" element={<MyCollection />} />
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
