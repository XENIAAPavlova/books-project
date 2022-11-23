import React from "react";
import "./AddToCollectionButton.css";

export default function AddToCollectionButton(props) {
  let inlineRender = props.inlineRender;

  if (inlineRender) {
    return (
      <button
        // onClick={() => addToCollection(book)}
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
        // onClick={() => addToCollection(book)}
        id="trending-button"
        type="submit"
        className="btn shadow-sm justify-content-md-end"
      >
        Add
      </button>
    );
  }
}
