import React, { useState } from "react";
import "./MyCollection.css";

export default function MyCollection() {
  let [bookCollection, setBookCollection] = useState(
    JSON.parse(window.localStorage.getItem("userBookCollection"))
  );

  function removeBook(item) {
    console.log(`The book is removed`);
    console.log(item);

    let userBookCollection =
      JSON.parse(window.localStorage.getItem("userBookCollection")) || [];

    //
    //
    //

    let itemIndex = userBookCollection.findIndex(function (element) {
      return element.key === item.key;
    });
    userBookCollection.splice(itemIndex, 1);
    //
    //
    //
    window.localStorage.setItem(
      "userBookCollection",
      JSON.stringify(userBookCollection)
    );

    setBookCollection(userBookCollection);
  }

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
                        onClick={() => removeBook(book)}
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
