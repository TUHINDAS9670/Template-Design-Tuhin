import React from "react";
import "./Footer.css";
import { footerLinks,socialLinks } from "../../utils/FooterData";

// Import icons
import { SlSocialGithub, SlSocialInstagram } from "react-icons/sl";
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialTwitter,
} from "react-icons/ti";

const iconMap = {
  facebook: <TiSocialFacebook />,
  twitter: <TiSocialTwitter />,
  instagram: <SlSocialInstagram />,
  linkedin: <TiSocialLinkedin />,
  github: <SlSocialGithub />,
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>
            Crypto<span className="highlight">Flow</span>
          </h2>
          <p>
            The most trusted cryptocurrency platform, empowering traders with
            innovative tools and unparalleled security.
          </p>

          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url}>
                {iconMap[social.icon]}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-links">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025 CryptoFlow. All rights reserved. ~ Distributed By{" "}
          <span className="themewagon">ThemeWagon</span>
        </p>
        <div className="footer-terms">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
