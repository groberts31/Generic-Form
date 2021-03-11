import React from "react";
import "./style.css";

function Form() {
  return (
    <div className="jumbotron">
      <h1 className="header">
        <span>Roberts Form #1</span>
      </h1>
      <div className="form-group">
  <label for="usr">Name:</label>
  {/* <input type="text" className="form-control" id="usr"> */}
</div>
    </div>
  );
}

export default Form;
