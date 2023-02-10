import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Trending from "./Trending";
import Navigation from "./Navigation";
import Home from "./Home";
import MyCollection from "./MyCollection";
import Quotes from "./Quotes";


import "./App.css";

export default function App() {
  // const [item, setItem] = useState("");
  // const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")));

  // useEffect(() => {
  //   localStorage.setItem("items", JSON.stringify(items));
  // }, [items]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/myCollection" element={<MyCollection />} />
          <Route path="/quotes" element={<Quotes />} />
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
