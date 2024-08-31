import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import WorkImage from "../../assets/flanges.jpg";

import "./Contact.css";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p0y7j3y",
        "template_ufhgo6p",
        form.current,
        "_Emb9eXZ7--3kIgPv"
      )
      .then(
        () => {
          // Show success alert and auto-close after 2 seconds
          Swal.fire({
            title: "Email has been sent!",
            timer: 2000,
            showConfirmButton: false,
            icon: "success",
          });
        },
        () => {
          // Show error alert if email sending fails
          Swal.fire({
            title: "Failed to send email. Please try again.",
            timer: 2000,
            showConfirmButton: false,
            icon: "error",
          });
        }
      );
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${WorkImage})` }}
      ></div>
      <div className="rightSide">
        <div className="cardContainer">
          <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              name="user_name"
              placeholder="Please enter your name..."
              type="text"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              name="user_email"
              placeholder="Please enter your email..."
              type="email"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
            <div className="btnContainer">
              <button className="submitBtn" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
