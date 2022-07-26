import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search mt-4 mb-4 ms-5">
      <form className="row justify-content-center" onSubmit={Search}>
        <div className="col-6">
          <input className="form-control shadow-sm" type="search" />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className=" btn btn-light shadow-sm justify-content-md-end"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
