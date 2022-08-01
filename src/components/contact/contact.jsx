import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6a1rqeh",
      "template_15cn4gg",
      form.current,
      "ex0P5FeAXyONUY_Nv"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>zouinekhamine@gmail.com</h5>
            <a href="mailto:zouinekhamine@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>Zouinekh Amine</h5>
            <a href="https://m.me/zouinekhamin" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+216 46******</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+21646280342"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* end of contact */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
