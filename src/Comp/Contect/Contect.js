import { useRef } from "react";
import React from "react";
import "./Contect.css";
import gitimg from "./github-.png";
import emailing from "./email.png";
import linkedinimg from "./linkedin.png";
import instapng from "./instagram-.png";
import emailjs from "@emailjs/browser";

const Contect = () => {
  const sendEmail = (e) => {
    e.preventDefault();emailjs.sendForm("service","template",form.current,"jn")
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("email sent!")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const form = useRef();

  return (
    <div id="contectme" className="contectPage">
      <div className="contect">
        <h1 className="contectPageTitle">Contect Me</h1>
        <span className="contectDesc">Please fillout the form to Contect</span>
        <form className="contectForm" ref={form} onSubmit={sendEmail}>
          <input className="name" type="text" placeholder="Your Name..."  name="your_name"/>
          <input className="email" type="email" placeholder=" Your email"  name="your_email"/>
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your message">

          </textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
</button>
          <div className="links">
            <img src={gitimg} alt="" className="link" />
            <img src={emailing} alt="" className="link" />
            <img src={linkedinimg} alt="" className="link" />
            <img src={instapng} alt="" className="link" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contect;
