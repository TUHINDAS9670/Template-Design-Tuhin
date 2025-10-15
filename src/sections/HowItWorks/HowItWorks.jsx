import React from "react";
import "./HowItWorks.css";
import StepCard from "../../components/StepCard/StepCard";
import { FiDownload } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import { VscGraphLine } from "react-icons/vsc";

const HowItWorks = () => {
  const howitworksdata = [
    {
      step: "01",
      title: "Create Your Account",
      description:
        "Sign up in minutes with our streamlined onboarding process. No complicated forms or lengthy verification.",
      icon: FiDownload,
    },
    {
      step: "02",
      title: "Fund Your Wallet",
      description:
        "Easily deposit crypto or fiat through multiple payment options with zero deposit fees.",
      icon: LuWallet,
    },
    {
      step: "03",
      title: "Start Trading",
      description:
        "Access 50+ cryptocurrencies and start trading immediately with intuitive tools and real-time data.",
      icon: VscGraphLine,
    },
  ];
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
