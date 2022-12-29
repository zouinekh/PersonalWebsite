import React from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/me .png";
import HeaderSocial from "./headerSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container ">
        <div className="typewriter">
        <h5 className="">Hello I'm</h5>
        <h1>Amine Zouinekh </h1>
        <h5 className="text-light">FullStack Developer</h5>
        </div>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={me} alt="me"  className="pic"/>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
