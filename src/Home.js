import React, { useState } from "react";
import axios from "axios";
import Intro from "./Intro";
import BookResults from "./BookResults";
import Random from "./Random";

export default function Home() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState([]);

  function handleResponse(response) {
    console.log(response.data.docs);
    setResults(response.data.docs);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://openlibrary.org/search.json?q=${keyword}&_facet=false&_spellcheck_count=0&limit=10&fields=key,cover_i,title,subtitle,author_name,name&mode=everything`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearchwordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="container">
      <br />
      <section>
        <div className="Search mt-4 mb-4 ms-5">
          <form onSubmit={search} className="row justify-content-center">
            <div className="col-6">
              <input
                className="form-control shadow-sm"
                type="search"
                onChange={handleSearchwordChange}
              />
            </div>
            <div className="col-2">
              <div className="search-button">
                <button
                  type="submit"
                  className="btn shadow-sm justify-content-md-end"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section>
        <Intro />
      </section>
      <section>
        <BookResults results={results.slice(0, 4)} />
      </section>
      <p className="random-text">Random picks</p>
      <section>
        <Random
          results={[
            {
              key: "/works/OL5735363W",
              title: "The Hunger Games",
              cover_i: 12646545,
              author_name: ["Suzanne Collins"],
              description:
                "Katniss volunteers to replace her sister in a tournament that ends only when one participant remains. Pitted against contestants who have trained for this all their life, she has little to rely on.",
            },
            {
              key: "/works/OL3140834W",
              title: "To Kill a Mockingbird",
              cover_i: 12606502,
              author_name: ["Harper Lee"],
              description:
                "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature, winning the Pulitzer Prize.",
            },
            {
              key: "/works/OL5819456W",
              title: "The Book Thief",
              cover_i: 8310846,
              author_name: ["Markus Zusak"],
              description:
                "The Book Thief is a story narrated by a compassionate Death who tells us about Liesel, a girl growing up in Germany during World War II. She steals books, learns to read, and finds comfort in words. She and Max, the Jew her family protects, are the only main characters that survive the war.",
            },
            {
              key: "/works/OL25073891W",
              title: "Of Human Bondage",
              cover_i: 11996470,
              author_name: ["W. Somerset Maugham"],
              description:
                "Of Human Bondage is a 1915 novel by W. Somerset Maugham. It traces the life and development of Philip Carey, and his formative, tortured and masochistic affair with Mildred, a waitress.",
            },
          ]}
        />
      </section>{" "}
    </div>
  );
}
