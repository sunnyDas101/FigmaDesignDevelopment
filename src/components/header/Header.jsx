import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-searchbar-container">
          <input
            className="navbar-searchbar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </div>
        <ul className="navbar-list">
          <li className="navbar-item">Categories</li>
          <li className="navbar-item">Website Builders</li>
          <li className="navbar-item">Today's deals</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
