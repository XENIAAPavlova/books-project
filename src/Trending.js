import React, { useState } from "react";
import axios from "axios";
import "./Trending.css";

export default function Trending() {
  const [ready, setReady] = useState(false);
  const [results, setResults] = useState([]);

  function handleApiResponse(response) {
    console.log(response.data.works);
    setResults(response.data.works);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="container ">
        {results.slice(0, 10).map(function (book, i) {
          console.log("hello");
          console.log(book);

          let cover = "/no_cover_pic.png";
          if (book.cover_i) {
            cover = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
          }

          return (
            <div className="card mb-3 mt-5" key={i}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={cover}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{book.author_name}</h5>
                    <p className="card-text">{book.title}</p>
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
          );
        })}
      </div>
    );
  } else {
    let url = "https://openlibrary.org/trending/now.json";
    axios.get(url).then(handleApiResponse);
  }
}
