import React from "react";
import "./Revolution.css";
import { ArrowRight } from "lucide-react";

export default function Revolution() {
  return (
    <section className="revolution">
      <div className="revolution-content">
        <h1>
          Ready to revolutionize your{" "}
          <span className="highlight">crypto trading</span>?
        </h1>
        <p>
          Join thousands of traders who have already upgraded their crypto
          experience with <span className="brand">CryptoFlow</span>. Start today
          with zero risk.
        </p>
        <div className="revolution-buttons">
          <button className="btn-primary">
            Get Started for Free <ArrowRight size={18} />
          </button>
          <button className="btn-secondary">Schedule Demo</button>
        </div>
        <span className="note">
          No credit card required. Cancel anytime.
        </span>
      </div>
    </section>
  );
}
