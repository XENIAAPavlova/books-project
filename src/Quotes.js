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
    <figure className="text-center">
      <blockquote className="blockquote">
        <p>{quote.content}</p>
      </blockquote>
      <figcaption className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
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
  );
}
