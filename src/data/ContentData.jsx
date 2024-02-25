import React from "react";
import DesktopImg from "../assets/Desktop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faAngleDown,
  faStar as solidStar,
  faStarHalfAlt,
  faInfoCircle,
  faGem,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const renderStars = (rating) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={solidStar}
          style={{ fontSize: "10px" }}
        />
      );
    } else if (i - rating === 0.5) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarHalfAlt}
          style={{ fontSize: "10px" }}
        />
      );
    } else {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={regularStar}
          style={{ fontSize: "10px" }}
        />
      );
    }
  }

  return stars;
};

const ContentData = [
  {
    content: {
      awardIcon: <FontAwesomeIcon icon={faTrophy} />,
      award: "Best Choice",
      sqNum: 1,
      imgSrc: DesktopImg,
      imgAlt: "Desktop Image",
      imgText: "Builder 1",
      desc: (
        <>
          <span>WixPro 72-Inch Responsive Website Builder</span>- Comprehensive
          Digital Platform Creation Tool, Streamlined Design Interface for
          Professional Websites and Online Stores (Black/Blue)
          <div className="content-inner-desc">
            <span>Main highlights</span>
            <p>
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
            </p>
          </div>
          <div className="content-link">
            <a href="#">
              Show more <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </div>
        </>
      ),
      ratingBox: (
        <div className="content-rating-box">
          <span className="rating">
            9.8
            <FontAwesomeIcon
              className="infoIcon"
              icon={faInfoCircle}
              style={{ fontSize: "10px" }}
            />
          </span>
          <h4>Exceptional</h4>
          <span className="stars">{renderStars(5)}</span>
        </div>
      ),
      btn: <button className="content-btn">View</button>,
    },
  },
  {
    content: {
      awardIcon: <FontAwesomeIcon icon={faGem} />,
      award: "Best Value",
      sqNum: 2,
      imgSrc: DesktopImg,
      imgAlt: "Desktop Image",
      imgText: "Builder",
      desc: (
        <>
          <span>SiteCraft 68-Inch Ultimate Web Design Studio</span>- Advanced
          Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic
          Websites and E-commerce Platforms (Green/White)
          <div className="content-inner-desc">
            <span>Main highlights</span>
            <p>
              [What You Get]: Gain access to the SiteCraft design studio,
              featuring a robust selection of design elements, SEO optimization
              tools, and e-commerce integrations.
            </p>
          </div>
          <div className="content-link">
            <a href="#">
              Show more <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </div>
        </>
      ),
      ratingBox: (
        <div className="content-rating-box">
          <span className="rating">
            9.5
            <FontAwesomeIcon
              className="infoIcon"
              icon={faInfoCircle}
              style={{ fontSize: "10px" }}
            />
          </span>
          <h4>Excellent</h4>
          <span className="stars">{renderStars(4.5)}</span>
        </div>
      ),
      btn: <button className="content-btn">View</button>,
    },
  },
  {
    content: {
      sqNum: 3,
      imgSrc: DesktopImg,
      imgAlt: "Desktop Image",
      imgText: "Builder 1",
      desc: (
        <>
          <span>WixPro 72-Inch Responsive Website Builder</span>- Comprehensive
          Digital Platform Creation Tool, Streamlined Design Interface for
          Professional Websites and Online Stores (Black/Blue)
          <div className="content-inner-desc">
            <span>Main highlights</span>
            <p>
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
            </p>
          </div>
          <div className="content-link">
            <a href="#">Show more </a>
          </div>
        </>
      ),
      ratingBox: (
        <div className="content-rating-box">
          <span className="rating">
            9.3
            <FontAwesomeIcon
              className="infoIcon"
              icon={faInfoCircle}
              style={{ fontSize: "10px" }}
            />
          </span>
          <h4>Exceptional</h4>
          <span className="stars">{renderStars(5)}</span>
        </div>
      ),
      btn: <button className="content-btn">View</button>,
    },
  },
  {
    content: {
      sqNum: 4,
      imgSrc: DesktopImg,
      imgAlt: "Desktop Image",
      imgText: "CDK",
      desc: (
        <>
          <span>CDK Resposive Builder</span>: An extensive library of widgets
          and apps, and detailed step-by-step guides
          <p className="offerTag">26% off</p>
          <div className="content-inner-desc content-inner-desc-secondary">
            <span>Main highlights</span>
            <div className="content-list">
              <ul>
                <li>
                  <span>9.9</span> Building Responsive
                </li>
                <li>
                  <span>8.9</span> Cool
                </li>
                <li>
                  <span>8.9</span> Docs
                </li>
              </ul>
            </div>
            <div className="content-info">
              <h4>Why we love it</h4>
              <ul>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{" "}
                  Documentation
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{" "}
                  Easy Use
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{" "}
                  Out Of Box
                </li>
              </ul>
            </div>
          </div>
          <div className="content-link">
            <a className="link" href="#">Show more </a>
          </div>
        </>
      ),
      ratingBox: (
        <div className="content-rating-box content-rating-box-secondary">
          <span className="rating">
            9.1
            <FontAwesomeIcon
              className="infoIcon"
              icon={faInfoCircle}
              style={{ fontSize: "10px" }}
            />
          </span>
          <h4>Very Good</h4>
          <span className="stars">{renderStars(4)}</span>
        </div>
      ),
      btn: <button className="content-btn">View</button>,
    },
  },
];

export default ContentData;
