import React from "react";
import './PricingCard.css'; 

const PricingCard = ({
  plan,
  price,
  interval,
  description,
  buttonText,
  buttonType,
  features,
  isPopular,
}) => {
  return (
    <div className={`pricing-card ${isPopular ? "popular-card" : ""}`}>
      {isPopular && <div className="popular-badge">Most Popular</div>}
      <div className="card-title">
        <h2 className="name">{plan}</h2>
        <div className="price">
          <span className="currency-sign">$</span>
          <span className="price-value">{price}</span>
          <span className="price-interval">{interval}</span>
        </div>
        <p className="plan-description">{description}</p>
        <button className={`plan-button ${buttonType}`}>{buttonText}</button>
      </div>
      <div className="card-features">
        <h3 className="features-title">What's Included : </h3>
        <ul>
          {features.map((feature,index)=>(
            <li key={index}>
              ✔️{feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
