import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import { testimonialsData } from "../../utils/TestimonialData";



const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Users Say</h2>
        <p className="testimonials-subtitle">
          Join thousands of satisfied traders who have transformed their trading
          experience with CryptoFlow.
        </p>

        {/* SLIDER WRAPPER */}
        <div className="testimonial-slider">
          <div
            className="testimonial-track"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonialsData.map((item, index) => (
              <div className="testimonial-slide" key={index}>
                <TestimonialCard
                  quote={item.quote}
                  name={item.name}
                  occupation={item.occupation}
                  profile_pic={item.profile_pic}
                />
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="testimonial-dots">
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              className={index === current ? "active" : ""}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
