import React, { useState } from "react";

import "./AddToCollectionButton.css";

export default function AddToCollectionButton(props) {
  const [buttonText, setButtonText] = useState("Add");

  function addToCollection(item) {
    setButtonText("Added");

    setTimeout(() => {
      setButtonText("Add");
    }, 1000);

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
        {buttonText}
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
        {buttonText}
      </button>
    );
  }
}
