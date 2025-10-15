import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import profiepic1 from "../assets/profile_pic1.jpg";
import profiepic2 from "../assets/profile_pic2.jpg";
import profiepic3 from "../assets/profile_pic3.jpg";
import profiepic4 from "../assets/profile_pic4.jpg";

const testimonialsData = [
  {
    quote:
      '"CryptoFlow has completely transformed my crypto trading experience. The real-time analytics and AI recommendations have significantly improved my returns."',
    name: "Michael Chen",
    occupation: "Full-time Trader",
    profile_pic: profiepic1,
  },
  {
    quote:
      '"As a beginner, I was intimidated by crypto trading until I found CryptoFlow. Their intuitive interface and educational resources made it easy to start investing confidently."',
    name: "Sarah Johnson",
    occupation: "Tech Entrepreneur",
    profile_pic: profiepic2,
  },
  {
    quote: `"The security features on CryptoFlow are unmatched. I feel confident keeping my assets on their platform, and the trading fees are the most competitive I've found."`,
    name: "David Rodriguez",
    occupation: "Full-time Trader",
    profile_pic: profiepic3,
  },
  {
    quote: `"Their customer support is phenomenal. Any time I've had a question or issue, the team has resolved it quickly. The platform itself is lightning fast and reliable."`,
    name: "Emma Thompson",
    occupation: "Investment Advisor",
    profile_pic: profiepic4,
  },
];

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
