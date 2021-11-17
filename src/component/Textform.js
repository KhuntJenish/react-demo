import React, { useState } from "react";

export default function Textform(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log("onchange");
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
    // console.log("uppercase");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
    // console.log("lowercase");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
    // console.log("clear");
  };
  const handleCopy = () => {
    let text = document.getElementById("textbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to ClipBoard!", "success");
  };

  const handleExtraSpace = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove ExtraSpaces!", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className={`container text-${props.mode === "light" ? "dark" : "light"
          }`}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3 my-2">
          <textarea
            className="form-control"
            id="textbox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#271d1d" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1"
          style={{
            backgroundColor: props.mode === "dark" ? "#212529" : "#FF8C00",
            borderColor: props.mode === "dark" ? "#59677a" : "white",
          }}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1"
          style={{
            backgroundColor: props.mode === "dark" ? "#212529" : "#FF8C00",
            borderColor: props.mode === "dark" ? "#59677a" : "white",
          }}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1"
          style={{
            backgroundColor: props.mode === "dark" ? "#212529" : "#FF8C00",
            borderColor: props.mode === "dark" ? "#59677a" : "white",
          }}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-1"
          style={{
            backgroundColor: props.mode === "dark" ? "#212529" : "#FF8C00",
            borderColor: props.mode === "dark" ? "#59677a" : "white",
          }}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1"
          style={{
            backgroundColor: props.mode === "dark" ? "#212529" : "#FF8C00",
            borderColor: props.mode === "dark" ? "#59677a" : "white",
          }}
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className={`container my-3 text-${props.mode === "light" ? "dark" : "light"
          }`}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Character
        </p>
        <p>{text.split(".").length - 1} Sentence </p>
        <p>
          {(60 * (text.split(" ").length / 275)).toFixed(2)} sec reading time.
        </p>
        <p>
          {(60 * (text.split(" ").length / 180)).toFixed(2)} sec specking time.
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
