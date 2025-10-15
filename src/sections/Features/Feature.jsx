import React from "react";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import "./Feature.css";
import { MdAutoGraph, MdLock, MdPrivacyTip } from "react-icons/md";

import { FaBoltLightning } from "react-icons/fa6";
import { FaCompass } from "react-icons/fa";

import { GoGraph } from "react-icons/go";

const Feature = () => {
  const featuresData = [
    {
      icon: MdAutoGraph,
      title: "Real-time Analytics",
      description:
        "Monitor market movements with advanced charts and indicators updated in real-time.",
    },
    {
      icon: MdLock,
      title: "Bank-level Security",
      description:
        "Your assets are protected with military-grade encryption and multi-factor authentication.",
    },
    {
      icon: FaBoltLightning,
      title: "Instant Execution",
      description:
        "Execute trades in milliseconds with our high-performance trading engine.",
    },
    {
      icon: FaCompass,
      title: "Smart Portfolio",
      description:
        "Optimize your crypto holdings with AI-powered portfolio suggestions.",
    },
    {
      icon: GoGraph,
      title: "Price Alerts",
      description:
        "Never miss an opportunity with customizable price alerts and notifications.",
    },
    {
      icon: MdPrivacyTip,
      title: "Cold Storage",
      description:
        "Majority of assets stored in offline cold wallets for maximum security.",
    },
  ];
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
