import React, { useState } from "react";
import "./Navbar.css";
// import { Link } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
function Navbar() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const navigate=useNavigate();
  const closeMenu = () => {
    setisMenuOpen(false);
  };
  return (
    <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="logo" onClick={()=>{navigate("/")}}>
        Crypto <span className="logo-part">Flow</span>{" "}
      </div>
      {/* three bar menu icon only visible in mobile view */}
      <div className="menu-icon">
        <div>
          {isMenuOpen ? (
            <IoMdClose
              onClick={() => {
                setisMenuOpen(false);
              }}
              size={30}
            />
          ) : (
            <HiOutlineMenu
              onClick={() => {
                setisMenuOpen(true);
              }}
              size={30}
            />
          )}
        </div>
      </div>
      {/* 
      <ul className="nav-link">
        <li>
          <Link
            className="link"
            to="features"
            smooth={true}
            offset={50}
            duration={500}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="howitworks"
            smooth={true}
            offset={50}
            duration={500}
          >
            How it Works
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="pricing"
            smooth={true}
            offset={50}
            duration={500}
          >
            PRicing
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="faq"
            smooth={true}
            offset={50}
            duration={500}
          >
            Faq
          </Link>
        </li>

      </ul>
      
      */}
      <ul className="nav-link">
        <li>
          <Link className="link" to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/feature"onClick={closeMenu}>
            Features
          </Link>
        </li>
        <li>
          <Link className="link" to="/howitworks"onClick={closeMenu}>
            How it Works
          </Link>
        </li>
        <li>
          <Link className="link" to="/pricing"onClick={closeMenu}>
            Pricing
          </Link>
        </li>
        <li>
          <Link className="link" to="/faq"onClick={closeMenu}>
            Faq
          </Link>
        </li>

        {/* <li>Testimonials</li> */}
      </ul>

      <div className="button-div">
        <button className="login-button">Login</button>
        <button className="buy-now">Buy now</button>
      </div>
    </nav>
  );
}

export default Navbar;
