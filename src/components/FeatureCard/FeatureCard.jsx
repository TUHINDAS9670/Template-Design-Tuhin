import React from 'react'
import"./FeatureCard.css"
const FeatureCard = ({ icon:Icon,title, description}) => {
  return (
    <div className="card-item">
      <Icon size={40} style={{borderRadius:"12px",color:"rgb(166, 113, 216)"}}/>
      <h2 className="feature-title">{title}</h2>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureCard