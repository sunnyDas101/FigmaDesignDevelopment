import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-column">
        <h4>CATEGORIES</h4>
        <ul className="footer-list">
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic Automation</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>CONTACT</h4>
        <ul className="footer-list">
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms Of ServiceData Center</li>
          <li>Categories </li>
          <li>About</li>
        </ul>
      </div>
      <div className="footer-column single-footer-column">
        <ul className="footer-list single-footer-list">
          <li>
            United States{" "}
            <span>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
