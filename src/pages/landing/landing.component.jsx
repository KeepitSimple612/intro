import React, { useEffect } from "react";
import NavBar from "../../components/navBar/navBar";
import TitleHeader from "../../components/titleHeader/titleHeader";
import Footer from "../../components/footer/footer.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import M from "materialize-css";

import "./landing.styles.css";

const Landing = () => {
  useEffect(() => {
    let elems = document.querySelectorAll(".tabs");
    M.Tabs.init(elems);
  });

  return (
    <React.Fragment>
      <div className="landing">
        <NavBar />
        <TitleHeader />
      </div>
      <section className="section center">
        <div className="container">
          <div className="row">
            <div className="col s12 m6 offset-m3">
              <h4>Currently working on</h4>
              <div className="divider indigo lighten-3"></div>
              <br />
              <p>
                Improving my skills in differente aspects of software
                development. Understanding the concepts of frontend and backend
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <FontAwesomeIcon icon="desktop" size="2x" className="icons" />
              <h4>Frontend</h4>
              <p>
                Delivering a user-friendly interface to the client. Working with
                the UI/UX team to bring a great experience to the customer
              </p>
            </div>
            <div className="col s12 m6 backend">
              <FontAwesomeIcon icon="server" size="2x" className="icons" />
              <h4>Backend</h4>
              <p>
                Hand over information to the frontend through API's leveraging
                different frameworks and databases.
              </p>
            </div>
          </div>
          <div className="divider indigo lighten-4"></div>
          <br />
          <br />
          <div className="row">
            <div className="col s12 m6 offset-m3">
              <h4>My Creative Process</h4>
              <div className="divider indigo lighten-3"></div>
              <br />
              <p>
                Throught my years of working as a network engineer and been
                involved in differente projects, I believe the following
                processes are the pillars to deliver a final product
              </p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col s12 m3 creative-step">
              <FontAwesomeIcon icon="file-alt" size="2x" className="icons" />
              <h5 className="creative-title">Discuss the project</h5>
              <p className="creative-text">
                Defining the scope, schedule, budget and deliverables of a
                project. Reach an agreement with the customer
              </p>
            </div>
            <div className="col s12 m3 creative-step">
              <FontAwesomeIcon icon="brain" size="2x" className="icons" />
              <h5 className="creative-title">Brainstorming &amp; Concept</h5>
              <p className="creative-text">
                Working with the team to define the best tools to use in order
                to fulfill the requirements of the client and staying within the
                constrains of the project
              </p>
            </div>
            <div className="col s12 m3 creative-step">
              <FontAwesomeIcon
                icon="project-diagram"
                size="2x"
                className="icons"
              />
              <h5 className="creative-title">Planning &amp; Execution</h5>
              <p className="creative-text">
                Providing deliverables on each milestone of the project.
                Following the planning defined with the team and accepted by the
                customer
              </p>
            </div>
            <div className="col s12 m3 creative-step">
              <FontAwesomeIcon icon="handshake" size="2x" className="icons" />
              <h5 className="creative-title">Interaction</h5>
              <p className="creative-text">
                Getting feedback from the customer during the project, making
                sure the final product is within the expectations and
                requirements
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
