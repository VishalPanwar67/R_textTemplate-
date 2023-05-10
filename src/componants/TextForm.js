import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    // console.log("Upper ");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoclick = () => {
    // console.log("Upper ");
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleCopyclick = () => {
    // console.log("Copy");
    let text = document.getElementById("floatingTextarea");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleESclick = () => {
    // console.log("Remove Extra Space");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handelOnChange = (event) => {
    // console.log("Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Inter your text here");
  // text = "New text"

  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <div className="form-floating">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            value={text}
            onChange={handelOnChange}
            rows={8}
          ></textarea>
        </div>
        <div className="d-inline">
          <button className="btn btn-primary m-2" onClick={handleUpclick}>
            Upper Case
          </button>
          <button className="btn btn-primary m-2" onClick={handleLoclick}>
            Lower Case
          </button>
          <button className="btn btn-primary m-2" onClick={handleCopyclick}>
            Copy Text
          </button>
          <button className="btn btn-primary m-2" onClick={handleESclick}>
            Remove Extra Space
          </button>
        </div>

        <div>
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").length - 1} Words and {text.length} Characters{" "}
          </p>
          <p>
            {0.0077 * text.split(" ").length - 0.0077} Minutes read or{" "}
            {0.465 * text.split(" ").length - 0.465} Seconds read
          </p>
        </div>
      </div>
    </>
  );
}
