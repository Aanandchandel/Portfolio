import { useRef } from "react";
import React from "react";
import "./Contect.css";
import gitimg from "./github-.png";
import emailing from "./email.png";
import linkedinimg from "./linkedin.png";
import instapng from "./WhatsApp.svg.webp";
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
            <a href="https://github.com/Aanandchandel?tab=repositories"  > 
              <img src={gitimg} alt="" className="link" />
            </a>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=aanandchandel20@gmail.com"><img src={emailing} alt="" className="link" /></a>
            <a href="https://www.linkedin.com/in/aanandchandel/">
              <img src={linkedinimg} alt="" className="link" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B917247226533&text&type=phone_number&app_absent=0">
              <img src={instapng} alt="" className="link" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contect;
