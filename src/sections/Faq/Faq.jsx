import React, { useState } from "react";
import "./Faq.css";

const faqs = [
  {
    question: "How secure is CryptoFlow?",
    answer:
      "CryptoFlow uses bank-level encryption, two-factor authentication, and cold wallet storage to ensure your funds are safe.", // Sample answer
  },
  {
    question: "What cryptocurrencies can I trade on CryptoFlow?",
    answer:
      "You can trade major cryptocurrencies like Bitcoin, Ethereum, Litecoin, and many more supported tokens.",
  },
  {
    question: "What are the fees for using CryptoFlow?",
    answer:
      "Our fee structure is transparent and competitive. Basic accounts pay 0.25% per trade, Pro accounts pay 0.1%, and Enterprise accounts pay no trading fees. There are no hidden fees, and we don't charge for deposits. Withdrawal fees vary by cryptocurrency to cover network costs.",
  },
  {
    question: "How do I deposit funds into my CryptoFlow account?",
    answer:
      "You can deposit funds via bank transfer, credit card, or cryptocurrency transfer.",
  },
  {
    question: "Is CryptoFlow available in my country?",
    answer:
      "CryptoFlow is available in most countries. Please check our website for a full list of supported regions.",
  },
  {
    question: "How do I get started with CryptoFlow?",
    answer:
      "Just sign up, verify your identity, and make your first deposit to start trading!",
  },
];

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
