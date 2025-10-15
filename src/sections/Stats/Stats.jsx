import React, { useState } from "react";
import "./Stats.css";
import PricingCard from "../../components/PricingCard/PricingCard";
const pricingData = [
  {
    plan: "Basic",
    price: { monthly: 0, annual: 0 },
    interval: "/month",
    description: "Perfect for beginners getting started with crypto trading.",
    buttonText: "Get Started",
    buttonType: "primary-dark",
    features: [
      "Access to 20+ cryptocurrencies",
      "Basic charting tools",
      "Market data with 15-min delay",
      "Email support",
      "Mobile app access",
    ],
    isPopular: false,
  },
  {
    plan: "Pro",
    price: { monthly: 19, annual: 15 },
    interval: "/month",
    description: "Designed for active traders seeking advanced tools.",
    buttonText: "Start 7-Day Free Trial",
    buttonType: "highlight",
    features: [
      "Access to 50+ cryptocurrencies",
      "Advanced charting tools",
      "Real-time market data",
      "Priority email support",
      "Reduced trading fees (0.1%)",
      "API access",
      "Portfolio analytics",
    ],
    isPopular: true,
  },
  {
    plan: "Enterprise",
    price: { monthly: 49, annual: 39 },
    interval: "/month",
    description: "Comprehensive solution for professional traders.",
    buttonText: "Contact Sales",
    buttonType: "primary-dark",
    features: [
      "Access to all cryptocurrencies",
      "Professional-grade charts",
      "Real-time market data",
      "24/7 dedicated support",
      "Zero trading fees",
      "Advanced API access",
      "Institutional-grade security",
      "Custom reporting",
      "Team management",
    ],
    isPopular: false,
  },
];
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
