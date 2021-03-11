import React from "react";
import "./style.css";

function Email() {
  return (
    <div className="email">
      <label>
        Email: <span>*</span>
      </label>
      <br />
      <input type="text" id="email" placeholder="Email" />
      <br />
    </div>
  );
};

export default Email;
