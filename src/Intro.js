import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="row justify-content-center">
      <div className="col-9">
        <div className="card shadow rounded-2 mb-5 mt-5 border-0">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card-body text-start lh-lg">
                <h5 className="card-title pt-5">Build your library</h5>
                <p className="card-text">
                  Add your favorite books directly to lists without having to
                  search for them. This is a great way to keep tabs on what
                  you’ve already read vs. what you hope to read in the future.
                  And, yes, it’s free!
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <img
                src="/Reading 4.png"
                className="img-fluid float-end rounded-start"
                alt="card-picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
