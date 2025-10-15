import React from "react";
import "./Hero.css";
import { TiArrowRight } from "react-icons/ti";
import { GoArrowUpRight } from "react-icons/go";
import floating_image from "../../assets/floating-image.png";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineChevronRight } from "react-icons/md";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="new-feature">
            New Feature <span>AI-Powered Trading Signals {" "}</span>
          </div>
          <h1>
            Trade Crypto
            <span>
              {" "}
              with <br />
              Confidence & Clarity
            </span>
          </h1>

          <p>
            Experience seamless cryptocurrency trading with real-time analytics,
            AI-powered insights, and zero commission fees.
          </p>
          <div className="buttons">
            <button className="trade-button">
              Start Trading <TiArrowRight size={25} className="arrow" />{" "}
            </button>
            <button className="demo-button">
              Start Demo <GoArrowUpRight size={25} />{" "}
            </button>
          </div>
          <div className="numbers">
            <div className="number">
              <h2>$2.5B+</h2>
              <span>Trading Volume</span>
            </div>
            <div className="bar"></div>
            <div className="number">
              <h2>120K+</h2>
              <span>Active Traders</span>
            </div>
            <div className="bar"></div>
            <div className="number">
              <h2>50+</h2>
              <span>Global Markets</span>
            </div>
          </div>
        </div>
        {/* img */}
        <div className="hero-image">
          <img src={floating_image} alt="Hero" className="main-image" />
          <div className="floating-card top-card">
            <MdOutlinePrivacyTip style={{color:"#8a7cff",fontWeight:"bolder"}} size={45} />
            <div className="floating-card-heading">
              <p className="small-heading">Security Level</p>
              <p className="bottom-card-highlighted-heading">Enterprise</p>
            </div>
          </div>
          <div className="floating-card bottom-card">
            <BsGraphUpArrow size={45} style={{color:"green",fontWeight:"bolder"}} />
            <div className="floating-card-heading">
              <p className="small-heading">24h Change</p>
              <p className="top-card-highlighted-heading">+12.34%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
