import React from "react";
import "./HowItWorks.css";
import StepCard from "../../components/StepCard/StepCard";

import { howitworksdata } from "../../utils/HowItWorksData";
const HowItWorks = () => {

  return (
    <section className="howitworks-section" id="howitworks">
      <div className="text">
        <h1>How It Works</h1>
        <p>
          Getting started with cryptoflow is easy . Follow these simple steps to
          begin your crypto journey.
        </p>
      </div>
      <div className="main-container">
        {howitworksdata.map((data) => (
          <StepCard
            key={data.step}
            icon={data.icon}
            step={data.step}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
      <button className="button">Create Free Account</button>
    </section>
  );
};

export default HowItWorks;
