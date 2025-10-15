import React from 'react'
import "./StepCard.css"

const StepCard = ({icon:Icon,step,title,description}) => {
  return (
    <div className='step-card'>
      <div className='step-number'>
        <span className='number'>{step}</span>
      </div>
      <div className='card-content'>
        <Icon size={40} className="step-icon"/>
        <h2 className='step-title'>{title}</h2>
        <p className='step-description'>{description}</p>
      </div>
    </div>
  )
}

export default StepCard