import React from "react";
import "./AddToCollectionButton.css";

export default function AddToCollectionButton(props) {
  function addToCollection(item) {
    console.log(`You added a book`);
    console.log(item);

    let userBookCollection =
      JSON.parse(window.localStorage.getItem("userBookCollection")) || [];
    userBookCollection.push(item);

    console.log(userBookCollection);

    window.localStorage.setItem(
      "userBookCollection",
      JSON.stringify([...new Set(userBookCollection)])
    );
  }

  let inlineRender = props.inlineRender;
  let book = props.book;

  if (inlineRender) {
    return (
      <button
        onClick={() => addToCollection(book)}
        id="trending-button"
        type="submit"
        className="add-button btn mb-3 me-2"
      >
        Add
      </button>
    );
  } else {
    return (
      <button
        onClick={() => addToCollection(book)}
        id="trending-button"
        type="submit"
        className="btn shadow-sm justify-content-md-end"
      >
        Add
      </button>
    );
  }
}
