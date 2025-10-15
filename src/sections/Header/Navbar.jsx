import React, { useState } from "react";
import "./Navbar.css";
// import { Link } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { navLinks } from "../../utils/NavLink";
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
      
      <ul className="nav-link">
        {navLinks.map((items,idx)=>(
          <li key={idx}>
          <Link className="link" to={items.path} onClick={closeMenu}>
            {items.name}
          </Link>
        </li>
        ))}
      </ul>
      <div className="button-div">
        <button className="login-button">Login</button>
        <button className="buy-now">Buy now</button>
      </div>
    </nav>
  );
}

export default Navbar;
