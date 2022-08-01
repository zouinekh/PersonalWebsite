import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Go Top
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experinces">Experinces</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/zouinekhamin">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/aminezouinekh/">
          <SiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/amine-zouinekh/">
          <BsLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
