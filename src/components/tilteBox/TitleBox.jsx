import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faInfoCircle,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "./titleBox.scss";

const TitleBox = () => {
  const [isIconHovered, setIsIconHovered] = useState(false);

  return (
    <div className="titleBox">
      <h1 className="title">Best Website builders in the US</h1>
      <div className="title-info">
        <div className="title-date-time">
          <span>
            <FontAwesomeIcon className="icon" icon={faCircleCheck} />
            Last Updated - February 22, 2020
          </span>
          <span>
            <FontAwesomeIcon className="icon" icon={faInfoCircle} />
            Advertising Disclosure
          </span>
        </div>
        <div className="title-dropdown">
          <span
            onMouseEnter={() => setIsIconHovered(true)}
            onMouseLeave={() => setIsIconHovered(false)}
          >
            Top Relevant
            <FontAwesomeIcon
              className={`icon ${isIconHovered ? "rotate" : ""}`}
              icon={faAngleDown}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TitleBox;
