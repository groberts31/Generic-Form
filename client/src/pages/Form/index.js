import React from "react";
import "./style.css";
import Name from "../../components/Name";
import Email from "../../components/Email";

function Form() {
  return (
    <div className="card">
      <div className="card-body">
        <form id="form">
          <div id="contactInfo">
          <Name/>
          <Email/>
            <label>
              Contact No: <span>*</span>
            </label>
            <br />
            <input type="text" id="contact" placeholder="10 digit Mobile no." />
            <br />
            <label>Message:</label>
            <br />
            <textarea id="message" placeholder="Message......."></textarea>
            <br />
            <p>* = Required Fields</p>
            <button className="btn btn-primary" id="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;