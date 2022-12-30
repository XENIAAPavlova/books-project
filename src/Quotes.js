import axios from "axios";
import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./Quotes.css";

export default function Quotes() {
  let [quote, setQuote] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setQuote(response.data);
  }

  function updateQuote() {
    let url = "https://api.quotable.io/random";
    axios.get(url).then(handleResponse);
  }
  useEffect(() => {
    // @TODO Fired twice
    updateQuote();
  }, []);

  function handleClick(event) {
    event.preventDefault();
    updateQuote();
  }

  return (
    <div className="container min-vh-75 min-vw-75 d-flex flex-column justify-content-center p-5">
      <div className="card shadow border-0 bg-body rounded" id="card-quote">
        <div className="row">
          <div className="col-md-12 mb-5 mt-5">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p id="quote-text">"{quote.content}"</p>
              </blockquote>
              <figcaption className="blockquote-footer pt-3 pb-3">
                {quote.author}
              </figcaption>
              <div className="search-button">
                <button
                  onClick={handleClick}
                  type="submit"
                  className="btn shadow-sm justify-content-md-end"
                >
                  Another one
                </button>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
