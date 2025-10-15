import React, { useState } from "react";
import "./Stats.css";
import PricingCard from "../../components/PricingCard/PricingCard";
import { pricingData } from "../../utils/PricingData";
const Stats = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const priceKey = isAnnual ? "annual" : "monthly";
  return (
    <section className="pricing-section" id="pricing">
      <div className="title-text">
        <h1>Simple, Transparent Pricing</h1>
        <p>
          Choose the plan that best fits your trading needs. Allplans inclde our
          core platform features
        </p>
      </div>
      <div className="subcription-type-button">
        <button
          className={`monthly toggle-button ${!isAnnual ? "active" : ""}`}
          onClick={() => setIsAnnual(false)}
        >
          Monthly
        </button>
        <button
          className={` annual toggle-button annual-save ${isAnnual ? "active" : ""}`}
          onClick={() => setIsAnnual(true)}
        >
          Annual <span className="save-text">Save 20%</span>
        </button>
      </div>
      <div className="pricing-grid">
        {pricingData.map((card, idx) => (
          <PricingCard
            key={idx}
            plan={card.plan}
            price={card.price[priceKey]}
            interval={card.interval}
            description={card.description}
            buttonText={card.buttonText}
            buttonType={card.buttonType}
            features={card.features}
            isPopular={card.isPopular}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
