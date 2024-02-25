import React from "react";
import ContentData from "../../data/ContentData";
import RelatedContentBox from "./relatedContentBox/RelatedContentBox";
import SignupNewsletter from "./signupNewsletter/SignupNewsletter";
import "./contentBox.scss";

const ContentBox = () => {
  return (
    <>
      <div className="contentBox">
        {ContentData.map((data, index) => (
          <div className="content-card" key={index}>
            {data.content.sqNum !== 3 && data.content.sqNum !== 4 && (
              <span className="content-award">
                {data.content.awardIcon} {data.content.award}
              </span>
            )}
            <span className="content-sq-num">{data.content.sqNum}</span>
            <div className="content-img">
              <img src={data.content.imgSrc} alt={data.content.imgAlt} />
              <span>{data.content.imgText}</span>
            </div>
            <div className="content-desc">{data.content.desc}</div>
            <div className="content-rating">
              {data.content.ratingBox}
              {data.content.btn}
            </div>
          </div>
        ))}
      </div>

      <RelatedContentBox />
      <SignupNewsletter />
    </>
  );
};

export default ContentBox;
