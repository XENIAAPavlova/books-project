import React from "react";
import "./Random.css";

export default function Random(props) {
  return (
    <div className="container ">
      {props.results.slice(0, 10).map(function (book, i) {
        console.log("hello");
        console.log(book);

        let authors = [];
        if (book.author_name) {
          authors = book.author_name;
        }

        let cover = "/no_cover_pic.png";
        if (book.cover_i) {
          cover = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
        }

        return (
          <div className="row justify-content-center">
            <div className="card mb-3 mt-5 p-0" key={i}>
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    id="random-book"
                    src={cover}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text fs-5" id="random-book-name">
                      {book.title}
                    </p>
                    <h5 className="card-title">by {authors.join(", ")}</h5>
                    <p>{book.description}</p>
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
      })}
    </div>
  );
}
