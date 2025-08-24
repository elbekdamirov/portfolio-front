import { ArrowRight } from "lucide-react";
import React from "react";
import hero from "../../assets/hero.png";
import "./Hero.scss"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-body">
            <h1>I design products </h1>
            <h1>that delight and inspire people.</h1>
            <p>
              Hi! I’m Jake, a product designer based in Berlin. I create
              user-friendly interfaces for fast-growing startups.
            </p>
            <div className="hero-body__btns">
              <button>Book a call</button>
              <span>
                <a href="#">
                  Dowload CV <ArrowRight />
                </a>
              </span>
            </div>
          </div>
          <div className="hero-image">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
