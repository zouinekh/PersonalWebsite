import React from "react";
import "./about.css";
import me from "../../assets/274696143_1520662434982103_364327903221333020_n.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { IoSchool } from "react-icons/io5";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>WORK EXPERIENCE</h5>
              <small>Internship with CNI </small>
            </article>
            <article className="about__card">
              <IoSchool className="about__icon" />
              <h5>EDUCATION</h5>
              <small>Sophomore Development of Information System</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed </small>
              <small>3 In work </small>

            </article>
          </div>
          <p>
          Computer science enthousiast with a passion for developing scalable web applications and working across the full stack(web,web3)
         
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
