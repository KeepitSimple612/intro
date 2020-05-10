import React from "react";
import { useEffect } from "react";
import { TypeWriter } from "../../utils/utils.functions";
import "./titleHeader.styles.css";

const TitleHeader = () => {
  useEffect(() => {
    function init() {
      const txtElement = document.querySelector(".txt-type");
      const words = JSON.parse(txtElement.getAttribute("data-words"));
      const wait = txtElement.getAttribute("data-wait");
      // Init TypeWriter
      new TypeWriter(txtElement, words, wait);
    }
    init();
  });

  return (
    <div className="container showcase">
      <div className="row">
        <div className="s12 m10 offset-m1 center">
          <h5>Welcome To My Site</h5>
          <h1>This Is My Story</h1>
          <h3>
            {" "}
            <span
              className="txt-type"
              data-wait={"3000"}
              data-words={'["Engineer","Developer","self-driven"]'}
            ></span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TitleHeader;
