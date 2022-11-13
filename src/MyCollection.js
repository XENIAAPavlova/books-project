import React from "react";
import "./MyCollection.css";

export default function MyCollection(props) {
  if (props.results) {
    return (
      <div className="container">
        <div className="col-md-3">
          <div className="card-body mb-5 mt-5 text-center">
            <img src="#" id="card-top" className="card-img-top" alt="..." />
            {props.results.map(function (book, i) {
              let author = [];
              if (book.author_name) {
                author = book.author_name;
              }
              return (
                <div key={i}>
                  <p className="card-book mb-2 mt-4">{book.title}</p>
                  <p className="card-author mt-3">{author}</p>
                  <div className="col-md-12 text-center d-flex"></div>
                </div>
              );
            })}
          </div>
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
