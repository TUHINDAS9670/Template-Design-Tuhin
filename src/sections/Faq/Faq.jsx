import React, { useState } from "react";
import "./Faq.css";

import { faqs } from "../../utils/FaqData";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="faq-container" id="faq">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <p className="faq-subtitle">
        Got questions about CryptoFlow? We've got answers. If you don't see what
        you're looking for, reach out to our support team.
      </p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
