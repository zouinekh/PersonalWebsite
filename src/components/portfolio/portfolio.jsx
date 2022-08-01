import React from "react";
import "./Portfolio.css";
import IMG from "../../assets/taarafshe.png";
import IMG1 from "../../assets/portfolio2.jpg";
import IMG2 from "../../assets/portfolio3.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>TaarafShe is social media Website </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/zouinekh/TaarafShe" className="btn" target="_blank">
              GitHub
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>NFTMint Website. using HardHat,ReactJs and solidity</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/zouinekh/full_mint_website" className="btn" target="_blank">
              GitHub
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3> Vocal Assistant project (english,arabic) to make your life easier with your desktop </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/zouinekh/voiceAssistant-tunisian-Version-" className="btn" target="_blank">
              GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
