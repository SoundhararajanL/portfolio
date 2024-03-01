
import { Component, createRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class Contact extends Component {
  constructor() {
    super();
    this.form = createRef();

    // Initialize state
    this.state = {
      formData: {
        name: "",
        email: "",
        message: "", // Add the message field in the initial state
      },
    };
  }

  sendEmail = async (e) => {
    e.preventDefault();

    try {
      const { name, email, message } = this.state.formData;
      const formData = { name, email, message };

      const response = await fetch('http://localhost:3001/api/saveFormData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result.message);
        toast("Your message is sent successfully...", {
          autoClose: 2000,
         
        });
        
      } else {
        console.error('Failed to save form data:', result.message);
      }
    } catch (error) {
      console.error('Error saving form data:', error);
    }

    e.target.reset();
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  render() {
    const { formData } = this.state;
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <div className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5 className="emailid">sowndhar00001@gmail.com</h5>
              <a href="mailto:sowndhar00001@gmail.com">Send a message</a>
            </div>
            
            <div className="contact__option">
              <RiWhatsappLine className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+91 9600436726</h5>
              <a href="https://api.whatsapp.com/send?phone=919600436726">
                Send a message
              </a>
            </div>
          </div>
          <form ref={this.form} onSubmit={this.sendEmail} action="">
            <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={this.handleInputChange}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            onChange={this.handleInputChange}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          </form>
       </div>
       <ToastContainer />
      </section>
    );
  }
}

export default Contact;
