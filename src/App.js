import React, { useState } from "react";
import logo from "./Bookverse_logo.svg";
import "./App.css";
import Explore from "./Explore";
// import "./Explore.css";
import Intro from "./Intro";
import Random from "./Random";
import BookResults from "./BookResults";
import axios from "axios";

export default function App() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState([]);

  function handleResponse(response) {
    console.log(response.data.docs);
    setResults(response.data.docs);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://openlibrary.org/search.json?q=${keyword}&_facet=false&_spellcheck_count=0&limit=10&fields=key,cover_i,title,subtitle,author_name,name&mode=everything`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearchwordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light ps-5 pe-5 mt-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" width="75" height="75" />
          </a>
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
                <a className="nav-link px-5" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-5" href="#">
                  Trending
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle px-5"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Collection
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-5" href="#">
                  Quotes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <br />
        <section>
          <div className="Search mt-4 mb-4 ms-5">
            <form onSubmit={search} className="row justify-content-center">
              <div className="col-6">
                <input
                  className="form-control shadow-sm"
                  type="search"
                  onChange={handleSearchwordChange}
                />
              </div>
              <div className="col-2">
                <div className="search-button">
                  <button
                    type="submit"
                    className="btn shadow-sm justify-content-md-end"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section>
          <Intro />
        </section>
        <section>
          <BookResults results={results.slice(0, 4)} />
        </section>
        <p className="random-text">Random picks</p>
        <section>
          <BookResults
            results={[
              {
                key: "/works/OL5735363W",
                title: "The Hunger Games",
                cover_i: 12646545,
                author_name: ["Suzanne Collins"],
              },
              {
                key: "/works/OL3140834W",
                title: "To Kill a Mockingbird",
                cover_i: 12606502,
                author_name: ["Harper Lee"],
              },
              {
                key: "/works/OL5819456W",
                title: "The Book Thief",
                cover_i: 8310846,
                author_name: ["Markus Zusak"],
              },
              {
                key: "/works/OL25073891W",
                title: "Of Human Bondage",
                cover_i: 11996470,
                author_name: ["W. Somerset Maugham"],
              },
            ]}
          />
          {/* <Random results={results} /> */}
        </section>
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
    </div>
  );
}
