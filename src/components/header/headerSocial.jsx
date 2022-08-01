import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/amine-zouinekh/" target="_blank">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/zouinekh" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/zouinekhamin" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocial;
