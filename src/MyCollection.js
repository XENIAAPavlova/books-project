import React from "react";
import "./MyCollection.css";

export default function MyCollection() {
  let bookCollection = [
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
                ]
  if (bookCollection) {
    return (
      <div className="container">
        <div className="row">
          {bookCollection.map(function (book, i) {
            let author = [];
            if (book.author_name) {
              author = book.author_name;
            }

            let cover = "/no_cover_pic.png";
            if (book.cover_i) {
              cover = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
            }
            return (
              <div className="col-md-3" key={i}>
                <div className="card-body mb-5 mt-5 text-center">
                  <div>
                    <div className="">
                      <img
                        id="random-book"
                        src={cover}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <p className="card-book mb-2 mt-4">{book.title}</p>
                    <p className="card-author mt-3">{author}</p>
                    <div className="col-md-12 text-center">
                      <button
                        className="add-button btn mb-3 me-2"
                        type="button"
                      >
                        Remove
                      </button>
                      <a
                        href={`https://openlibrary.org/${book.key}`}
                        target="_blank"
                        rel="noreferrer"
                        className="learn-more-button btn mb-3"
                        type="button"
                      >
                        Read
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="text-center">
          <p>Your collection is empty for now</p>
        </div>
      </div>
    );
  }
}
