import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import {
  MdOutlineMyLocation,
  MdLocalPhone,
  MdOutlineHourglassTop,
} from "react-icons/md";
import { IoMailOpen } from "react-icons/io5";
import { FaRegHandPointRight } from "react-icons/fa6";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoWhatsapp,
  IoLogoYoutube,
  IoLogoLinkedin,
} from "react-icons/io";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerTop">
        <div className="footerLeft">
          <img src={logo} alt="" />
          <p>
            JURISMAX is a team of Legal Specialists dedicated to filter out the
            possible risks and pitfalls and guide you in verifying the title of
            property. our Opinion matters a lot in your decision making and make
            you more confident about the property you wish to transact.
          </p>
        </div>
        <div className="footerMiddle">
          <div className="getTouchContianer">
            <h2>Get In Touch</h2>
            <ul>
              <li>
                <MdOutlineMyLocation />
                &nbsp; &nbsp; Deshaipet Road, Warangal
              </li>
              <li>
                <MdLocalPhone /> &nbsp; &nbsp;+91 9985801074
              </li>
              <li>
                <IoMailOpen />
                &nbsp; &nbsp; jurismaxllp@gmail.com
              </li>
              <li>
                <MdOutlineHourglassTop />
                &nbsp; &nbsp; Mon - Fri: 9AM - 10PM
              </li>
            </ul>
          </div>
          <div className="usefulLinkContainer">
            <h2>Useful Links</h2>
            <ul>
              <li>
                <FaRegHandPointRight />
                &nbsp; &nbsp; Title Investigation Report
              </li>
              <li>
                <FaRegHandPointRight /> &nbsp; &nbsp; About us
              </li>
            </ul>
          </div>
        </div>
        <div className="footerRight">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15178.30734018965!2d79.609362!3d17.9984142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3345d808e5ba8d%3A0x615a2e7cce48840!2sJURISMAX%20LEGAL%20STUDIO!5e0!3m2!1sen!2sin!4v1705931721316!5m2!1sen!2sin"
            width="300"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <ul>
            <li>
              <IoLogoFacebook className="socialIcons" />
            </li>
            <li>
              <IoLogoInstagram className="socialIcons" />
            </li>
            <li>
              <IoLogoWhatsapp className="socialIcons" />
            </li>
            <li>
              <IoLogoYoutube className="socialIcons" />
            </li>
            <li>
              <IoLogoLinkedin className="socialIcons" />
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          By subscribing to our news letter service, you will recieve links
          about recent subject articles published by professionals.
        </p>
        <div className="subscription">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <div className="button_subscribe">Subscribe</div>
        </div>
        <p className="rights">© 2022 JURISMAX. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
