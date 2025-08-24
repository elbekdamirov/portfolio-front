import React from "react";
import "./Testimonials.scss";
import testimonials from "../../assets/testimonials.png";
import vector from "../../assets/vector.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__title">
          <span>Testimonials</span>
          <h2>Word on the street</h2>
        </div>
        <div className="testimonials-wrapper">
          <div className="testimonials__image">
            <img src={testimonials} alt="" />
          </div>
          <div className="testimonials-body">
            <div className="testimonials-body__quote">
              <img src={vector} alt="" />
              <p>
                Jade helped us build a software so intuitive that it didn't need
                a walkthrough. He solved complex problems with brilliant design.
              </p>
            </div>
            <div className="testimonials-body__name">
              <div>
                <strong>John Frankin</strong>
                <p>Founder, Double Bunch</p>
              </div>
              <div>
                <button>
                  <ChevronLeft />
                </button>
                <button>
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
