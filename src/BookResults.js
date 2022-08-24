import React from "react";
import "./BookResults.css";

export default function BookResults(props) {
  if (props.results) {
    return (
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card-results shadow rounded-3 mb-5 mt-5 border-2">
            <div className="row justify-content-center">
              {props.results.map(function (book, i) {
                let authors = [];
                if (book.author_name) {
                  authors = book.author_name;
                }

                let cover = "/no_cover_pic.png";
                if (book.cover_i) {
                  cover = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
                }

                return (
                  <div className="col-lg-3" key={i}>
                    <div className="card-main mb-5 mt-5 text-center">
                      <img
                        src={cover}
                        id="card-top"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body-book">
                        <p className="card-book mb-2 mt-4">{book.title}</p>
                        <p className="card-author mt-3">
                          by {authors.join(", ")}
                        </p>
                        <div className="row">
                          <div className="col-sm-12 text-center">
                            <button
                              className="add-button btn mb-3 me-2"
                              type="button"
                            >
                              Add to collection
                            </button>
                            <a
                              href={`https://openlibrary.org/${book.key}`}
                              target="_blank"
                              rel="noreferrer"
                              className="learn-more-button btn mb-3"
                              type="button"
                            >
                              Learn more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
