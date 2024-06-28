import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <div className="navbarContainer">
      <div className="navContainerTop">
        <ul>
          <li>jurismaxllp@gmail.com</li>
          <li className=" middle">A COMPLETE ONLINE LEGAL SOLUTIONS COMPANY</li>
          <li>+91 9985801074</li>
        </ul>
      </div>
      <div className="navContainerBottom">
        <ul>
          <li>
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </li>
          <li>
            <GiHamburgerMenu
              className="hamburger"
              onClick={() => setHamburger(!hamburger)}
            />
          </li>
          <div className="navList">
            <li>
              <Link to="/reports">TITLE INVESTIGATION REPORT </Link>
            </li>
            <li>SERVICES</li>
            <li onClick={() => setHamburger(false)}>
              <Link to={"/login"}>LOGIN</Link>
            </li>
          </div>
        </ul>
        {hamburger && (
          <div className="mobileList">
            <li>TITLE INVESTIGATION REPORT</li>
            <li>SERVICES</li>
            <li onClick={() => setHamburger(false)}>
              <Link to={"/login"}>LOGIN</Link>
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
