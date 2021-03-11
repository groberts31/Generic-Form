import React from "react";
import "./style.css";
import Name from "../../components/Name";
import Email from "../../components/Email";
import Phone from "../../components/Phone";
import Message from "../../components/Message";

function Form() {
  return (
    <div className="card">
      <div className="card-body">
        <form id="form">
          <div id="contactInfo">
          <Name/>
          <Email/>
          <Phone/>
          <Message/>
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