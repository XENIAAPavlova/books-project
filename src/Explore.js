import React, { useState } from "react";
import "./Explore.css";
import axios from "axios";

export default function Explore() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
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
  );
}
