import React from "react";
import "./Services.scss";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services__title">
          <span>Services</span>
          <h2>Design that solves problems, one product at a time.</h2>
        </div>
        <div className="services-wrapper">
          <div className="services-item">
            <img src={service1} alt="" />
            <h3>What I can do for you</h3>
            <p>
              Faster, better products that your users love. Here's all the
              services I provide:
            </p>
            <ul>
              <li>Design Strategy</li>
              <li>Web and Mobile App Design</li>
              <li>Front-end Development</li>
            </ul>
          </div>

          <div className="services-item">
            <img src={service2} alt="" />
            <h3>Applications I'm fluent in</h3>
            <p>
              Every designer needs the right tools to do the perfect job.
              Thankfully, I'm multilingual.
            </p>
            <ul>
              <li>Sketch</li>
              <li>Webflow</li>
              <li>Figma</li>
            </ul>
          </div>

          <div className="services-item">
            <img src={service3} alt="" />
            <h3>What you can expect</h3>
            <p>
              I design products that are more than pretty. I make them shippable
              and usable.
            </p>
            <ul>
              <li>Clean and functional</li>
              <li>Device and user friendly</li>
              <li>Efficient and maintainable</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
