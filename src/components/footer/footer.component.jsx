import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.styles.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="section grey darken-3 white-text">
        <div className="container">
          <div className="row">
            <div className="col s6 m7 left-align valign-wrapper">
              <p>Copyright &copy; 2020</p>
            </div>
            <div className="col s6 m3 offset-m2 right-align">
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                className="footer-icon"
                onClick={() =>
                  window.open("https://twitter.com/keepitsimple612")
                }
                size="2x"
              />

              <FontAwesomeIcon
                icon={["fab", "linkedin-in"]}
                className="footer-icon"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/john-calderon/")
                }
                size="2x"
              />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
