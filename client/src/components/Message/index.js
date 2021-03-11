import React from "react";
import "./style.css";

function Message() {
  return (
    <div className="message">
      <label>Message:</label>
      <br />
      <textarea id="message" placeholder="Message......."></textarea>
      <br />
    </div>
  );
}

export default Message;
