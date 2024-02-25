import React from "react";
import Content from "./content/Content";
import "./relatedContentBox.scss";

const RelatedContentBox = () => {
  return (
    <>
      <h2>Related deals you might like for</h2>

      <div className="relatedContentBox">
        <Content />
        <Content />
        <Content />
      </div>
    </>
  );
};

export default RelatedContentBox;
