import React from "react";
import "./Footer.css";

import { SlSocialGithub,SlSocialInstagram } from "react-icons/sl";
import { } from "react-icons/ti";
import { TiSocialLinkedin,TiSocialFacebook ,TiSocialTwitter  } from "react-icons/ti";




export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-brand">
          <h2>
            Crypto<span className="highlight">Flow</span>
          </h2>
          <p>
            The most trusted cryptocurrency platform, empowering traders with
            innovative tools and unparalleled security.
          </p>
          <div className="social-icons">
            <a href="#">
              <TiSocialFacebook/>
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <SlSocialInstagram/>
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <SlSocialGithub />
            </a>
          </div>
        </div>

        
        <div className="footer-links">
          <div>
            <h4>Products</h4>
            <ul>
              <li>
                <a href="#">Exchange</a>
              </li>
              <li>
                <a href="#">Wallet</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">Institutional</a>
              </li>
              <li>
                <a href="#">DeFi Platform</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">Market Data</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Legal & Privacy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

   
      <div className="footer-bottom">
        <p>© 2025 CryptoFlow. All rights reserved. ~ Distributed By <span className="themewagon">ThemeWagon</span></p>
        <div className="footer-terms">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
