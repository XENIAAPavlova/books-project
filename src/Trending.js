import React, { useState } from "react";
import { Audio, Circles } from "react-loader-spinner";

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
        <div className="row">
          {results.slice(0, 6).map(function (book, i) {
            console.log("hello");
            console.log(book);

            let cover = "/no_cover_pic.png";
            if (book.cover_i) {
              cover = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
            }

            return (
              <div className="col-md-2" key={i}>
                <div className="card-main mb-5 mt-5 text-center">
                  <img
                    src={cover}
                    id="card-top"
                    className="card-img-top"
                    alt="..."
                  />
                  <p className="card-book mb-2 mt-4">{book.title}</p>
                  <p className="card-author mt-3">
                    by {book.author_name.join(", ")}
                  </p>
                  <div className="col-md-12 text-center">
                    <button className="add-button btn mb-3 me-2" type="button">
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
            );
          })}
        </div>
      </div>
    );
  } else {
    let url = "https://openlibrary.org/trending/now.json";
    axios.get(url).then(handleApiResponse);

    return (
      <div className="row justify-content-center">
        <div className="col-2" id="loader">
          <Circles
            height="80"
            width="80"
            radius="9"
            color="#7e6a80"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      </div>
    );
  }
}
