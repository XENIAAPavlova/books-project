import React from "react";
import "./Random.css";

export default function Random() {
  return (
    <div className="row justify-content-center mb-5">
      <div className="col-4 mb-5 mt-4">
        <div className="card border-0 h-100 box-shadow">
          {/* <img
          /> */}
          <div className="card-body">
            <h5 className="card-title text-center">The Hobbit</h5>
            {/* <p class="card-text text-center">
              Healthy foods can be easy AND yummy. Here are my 5 picks for
              glowing skin!
            </p> */}
            <div className="card-button btn-block text-center">
              <a
                href="https://www.geekyposh.com/7-easy-foods-for-healthy-glowing-skin/"
                target="blank"
                className="btn btn-branding mt-3"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 mb-5 mt-4">
        <div className="card border-0 h-100 box-shadow">
          {/* <img
          /> */}
          <div className="card-body">
            <h5 className="card-title text-center">The Hobbit</h5>
            {/* <p class="card-text text-center">
              Face mists are everywhere, but not all are made equal. Find out
              which ones are worth the money and how to best use them in your
              skincare routine!
            </p> */}
            <div className="card-button btn-block text-center">
              <a
                href="https://www.geekyposh.com/face-mists-101/"
                target="blank"
                className="btn btn-branding mt-3"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 mb-5 mt-4">
        <div className="card h-100 border-0 box-shadow">
          {/* <img
          /> */}
          <div className="card-body">
            <h5 className="card-title text-center">The Hobbit</h5>
            {/* <p class="card-text text-center">
              Sadly there is a lot of misinformation out there perpetuated by
              brands and influencers peddling their products, so I am here to
              set some records straight.
            </p> */}
            <div className="card-button btn-block text-center">
              <a
                href="https://www.healthline.com/health/physical-vs-chemical-sunscreen"
                target="blank"
                className="btn btn-branding mt-3"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
