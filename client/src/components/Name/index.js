import React from "react";
import "./style.css";

function Name() {
  return (
    <div className="name">
      <label>
        Name: <span>*</span>
      </label>
      <br />
      <input type="text" id="name" placeholder="Name" />
      <br />
    </div>
  );
}

export default Name;
