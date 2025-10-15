import React from "react";
import Hero from "../sections/Hero/Hero";
import Navbar from "../sections/Header/Navbar";
import Feature from "../sections/Features/Feature";
import HowItWorks from "../sections/HowItWorks/HowItWorks";
import Stats from "../sections/Stats/Stats";
import Faq from "../sections/Faq/Faq";
import Revolution from "../sections/Revolution/Revolution";
import Footer from "../sections/Footer/Footer";
import Testimonials from "../sections/Testimonial/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Feature />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <Faq />
      <Revolution />
    </>
  );
};

export default HomePage;
