import React from "react";
import "./Sponsors.scss";
import { IMAGES } from "../../static";

const Sponsors = () => {
  return (
    <section className="sponsors">
      <div className="container">
        <h3>Trusted by </h3>
        <div className="sponsors-wrapper">
          {IMAGES.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
