import React from "react";
import TitleBox from "../../components/tilteBox/TitleBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ContentBox from "../../components/contentBox/ContentBox";
import { optionsList } from "../../data/OptionList";
import { pathList } from "../../data/PathList";
import "./home.scss";

const Home = () => {
  return (
    <div className="main">
      <TitleBox />

      <div className="options">
        <ul className="options-list">
          {optionsList.map((option, index) => (
            <li key={index} className="options-item">
              {option}
            </li>
          ))}
        </ul>
      </div>

      <div className="path">
        <ul className="path-list">
          {pathList.map((pathItem, index) => (
            <React.Fragment key={index}>
              <li className="path-item">{pathItem}</li>
              {index < pathList.length - 1 && (
                <FontAwesomeIcon className="icon" icon={faAngleRight} />
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>

      <ContentBox />
    </div>
  );
};

export default Home;
