import React from "react";

import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer.component";
import Background from "../../img/background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./portfolio.styles.css";

const Portfolio = () => {
  return (
    <React.Fragment>
      <div className="portfolio-navbar">
        <NavBar />
      </div>
      <section className="section">
        <div className="container">
          <h4 className="center">Portfolio</h4>
          <div className="divider indigo lighten-3"></div>
          <div className="row">
            <div className="col s12 m8 offset-m2 center">
              <div className="card medium">
                <div className="card-image">
                  <img src={Background} />
                  <span className="card-title">Welcome Page</span>
                </div>
                <div className="card-content">
                  <p>
                    This page is my starting point for web development using
                    different tools and frameworks including:
                  </p>
                  <ul className="left-align">
                    <li>
                      <FontAwesomeIcon icon="check-square" />
                      <span>&nbsp;&nbsp;ReactJS</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon="check-square" />
                      <span>&nbsp;&nbsp;FontAwesome</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon="check-square" />
                      <span>&nbsp;&nbsp;Materialize</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h4>Contact Me</h4>
            <div className="divider indigo lighten-3"></div>
            <p>Here is how you can reach me</p>

            <div className="col s12 m6 offset-m3">
              <div className="card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
                <form
                  method="POST"
                  data-netlify="true"
                  data-netlify-recaptcha="true"
                >
                  <div className="input-field">
                    <i className="material-icons prefix">account_circle</i>
                    <input type="text" id="name" />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">subject</i>
                    <input type="text" id="subject" />
                    <label htmlFor="subject">Subject</label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <input type="email" className="validate" id="email" />
                    <label htmlFor="email">Email</label>
                    <span
                      className="helper-text"
                      data-error="wrong"
                      data-success="right"
                    ></span>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">phone</i>
                    <input type="text" id="phone" />
                    <label htmlFor="phone">Phone</label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea
                      className="materialize-textarea"
                      id="message"
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                  <div data-netlify-recaptcha="true"></div>

                  <button type="submit" className="btn indigo ">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Portfolio;
