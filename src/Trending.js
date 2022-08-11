import React from "react";
import Explore from "./Explore";
import "./Trending.css";

export default function Trending() {
  return (
    <div className="container ">
      <section>
        <Explore />
      </section>
      <div className="card mb-3 mt-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="row">
                <div className="col-5">
                  <button
                    id="trending-button"
                    type="submit"
                    className="btn shadow-sm justify-content-md-end"
                  >
                    Learn more
                  </button>
                </div>
                <div className="col-5">
                  <button
                    id="trending-button"
                    type="submit"
                    className="btn shadow-sm justify-content-md-end"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
