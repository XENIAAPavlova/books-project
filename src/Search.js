import React from "react";
import "./Search.css";
// import Intro from "./Intro";

export default function Search() {
  return (
    <div className="Search mt-4 mb-4 ms-5">
      <form className="row justify-content-center" onSubmit={Search}>
        <div className="col-6">
          <input className="form-control shadow-sm" type="search" />
        </div>
        <div className="col-2">
          <div className="search-button">
            <button
              type="submit"
              className=" btn shadow-sm justify-content-md-end"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
