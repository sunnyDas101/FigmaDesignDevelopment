import React from "react";
import DesktopImg from "../../../../assets/Desktop.png";

const Content = () => {
  return (
    <>
      <div className="relatedContent-card">
        <div className="imgContainer">
          <img src={DesktopImg} alt="Desktop Image" />
        </div>

        <div className="relatedContent-desc">
          <span className="tag">20% off</span>
          <span className="tag">Limited time</span>
          <h3 className="title">Webbuilder 1</h3>
          <div className="desc">
            <p>Computer Modern clasic with wix support</p>
          </div>
          <p className="price">
            $39.96 <span className="primaryPrice">$49.96</span>{" "}
            <span className="secondaryPrice">(20% off)</span>
          </p>
          <button>View Deal</button>
        </div>
      </div>
    </>
  );
};

export default Content;
