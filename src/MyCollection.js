import React from "react";
import "./MyCollection.css";

export default function MyCollection() {
  return (
    <div className="container">
      <div className="col-md-3">
        <div className="card-body mb-5 mt-5 text-center">
          <img src="#" id="card-top" className="card-img-top" alt="..." />
          <p className="card-book mb-2 mt-4">Book title</p>
          <p className="card-author mt-3">Author</p>
          <div className="col-md-12 text-center d-flex">
            {/* <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="learn-more-button btn mb-3"
              type="button"
            >
              Learn more
            </a> */}
          </div>
        </div>
      </div>
      <span>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              {/* <a
                className="page-link"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Previous
              </a> */}
            </li>
            <li className="page-item">
              {/* <a className="page-link" href="#">
                1
              </a> */}
            </li>
            <li className="page-item">
              {/* <a className="page-link" href="#">
                2
              </a> */}
            </li>
            <li className="page-item">
              {/* <a className="page-link" href="#">
                3
              </a> */}
            </li>
            <li className="page-item">
              {/* <a className="page-link" href="#">
                Next
              </a> */}
            </li>
          </ul>
        </nav>
      </span>
    </div>
  );
}
