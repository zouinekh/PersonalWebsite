import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setAcitveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setAcitveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setAcitveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setAcitveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setAcitveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setAcitveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdMessage />
      </a>
    </nav>
  );
};

export default Nav;
