import React from "react";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import "./Feature.css";
import { featuresData } from "../../utils/FeatureData";

const Feature = () => {
 
  return (
    <section className="feature-section" id="features">
      <div className="main-text">
        <h2>Powerful Features</h2>
        <p>
          CryptoFlow gives you the edge with advanced tools designed for both
          beginners and <br /> professional traders.
        </p>
      </div>
      <div className="feature-card">
        {featuresData.map((item) => (
          <FeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Feature;
