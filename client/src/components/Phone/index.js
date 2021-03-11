import React from "react";
import "./style.css";

function Phone() {
  return (
    <div className="phone">
      <label>
        Contact No: <span>*</span>
      </label>
      <br />
      <input type="text" id="contact" placeholder="10 digit Mobile no." />
      <br />
    </div>
  );
}

export default Phone;
