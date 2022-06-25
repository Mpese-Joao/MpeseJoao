import { ArrowBack } from "@material-ui/icons";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import "./styles/Contact.scss";

const Result = () => {
  return <p>successfully sent.I will contact you soon!</p>;
};

const Contact = (props) => {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m5d8bdh",
        "template_8q34orl",
        e.target,
        "A0RM1keWvQMO7mXRH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  return (
    <div className="contact">
      <Link to="/">
        <ArrowBack className="arrow" />
      </Link>
      <div className="inputs">
        <h1>Contact</h1>
        <form action="" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <input name="message" className="message" />
          <button>Send</button>
          <div className="row">{result ? <Result /> : null}</div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
