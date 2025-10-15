import React from 'react'
import "../Testimonial.css"
const TestimonialCard = ({quote,profile_pic,name,occupation}) => {
  return (
    <div className="testimonial-card fade-in">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="testimonial-text">{quote}</p>

          <div className="testimonial-user">
            <img src={profile_pic} alt={name} className="user-avatar" />
            <div className="user-info">
              <h4 className="user-name">{name}</h4>
              <p className="user-role">{occupation}</p>
            </div>
          </div>
        </div>
  )
}

export default TestimonialCard