import React, { Component, createRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";

import { RiWhatsappLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Contact extends Component {
  constructor() {
    super();
    this.form = createRef();
  }

  sendEmail(e) {
    e.preventDefault();

    const { name, email, message } = e.target.elements;

    const emailData = {
      name: name.value,
      email: email.value,
      message: message.value,
    }; 

   

    emailjs
      .send("service_dcsk2n4", "template_omwcqz9", emailData, "dfgNZK4ump9-JQXZG")
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sended !", {
           
          });
        },
        (error) => {
          console.log(error.text);
        }
      );

   

    e.target.reset();
  }

  render() {
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <div className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>sowndhar00001@gmail.com</h5>
            </div>
            <div className="contact__option">
              <RiWhatsappLine className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+91 9600436726</h5>
            </div>
          </div>
          <form ref={this.form} onSubmit={(e) => this.sendEmail(e)} action="">
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">
              Send Mail
            </button>
          </form>
        </div>
        <ToastContainer />
      </section>
    );
  }
}

export default Contact;
