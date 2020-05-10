import React from "react";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer.component";

import AboutLogo from "../../img/about.jpg";
import BrandMicrosoft from "../../img/brands/microsoft.png";
import BrandCisco from "../../img/brands/cisco.jpg";
import BrandVmware from "../../img/brands/vmware.png";
import "./about.styles.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="about-navbar">
        <NavBar />
      </div>
      <section className="section center">
        <div className="container">
          <div className="row">
            <div className="col s12 m6 offset-m3">
              <h4>About Me</h4>
              <div className="divider indigo lighten-3"></div>
              <br />
              <p>Let me tell you a little about myself and what I do... </p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m3">
              <div className="outer-wrapper">
                <div className="frame">
                  <img className="about-img" src={AboutLogo} />
                </div>
              </div>
            </div>
            <div className="col s12 m9">
              <blockquote>
                <h5>Network Engineer &gt;&gt; Web Developer</h5>
                <p className="about-text">
                  My career started in 2013 as a graduate from
                  telecommunications engeneering from&nbsp;
                  <a href="https://www.pucp.edu.pe/en/" target="_blank">
                    PUCP
                  </a>{" "}
                  .&nbsp;In the beginning a did some projects in software
                  development using Java with frameworks like jQuery and
                  bootstrap along with databases like MySQL. Then I diverted to
                  networking projects that involved working with equiments in
                  switching, wireless, servers, unified communications from
                  different vendors like Cisco and VMware. I was also involved
                  in cloud projects with Microsoft Azure deploying virtual
                  machines and AD solutions. Nowadays, I'm looking for
                  opportunities in web development using tools like ReactJS,
                  NodeJS and NoSQL databases like MongoDB.
                </p>
              </blockquote>
            </div>
            <br />
            <br />
          </div>
          <div className="row">
            <div className="col s12 m8 offset-m2">
              <h5>Technical Skills</h5>
              <div className="divider indigo lighten-3"></div>
              <h6 className="left-align">TCP/IP:</h6>
              <div className="progress indigo lighten-5">
                <div className="determinate progress-tcp-ip indigo"></div>
              </div>
              <h6 className="left-align">REACTJS:</h6>
              <div className="progress indigo lighten-5">
                <div className="determinate progress-react indigo"></div>
              </div>
              <h6 className="left-align">HTML & CSS:</h6>
              <div className="progress indigo lighten-5">
                <div className="determinate progress-html indigo"></div>
              </div>
              <h6 className="left-align">NodeJS:</h6>
              <div className="progress indigo lighten-5">
                <div className="determinate progress-node indigo"></div>
              </div>
              <h6 className="left-align">MONGODB:</h6>
              <div className="progress indigo lighten-5">
                <div className="determinate progress-mongo indigo"></div>
              </div>
              <h6 className="left-align">MYSQL:</h6>
              <div className="progress indigo lighten-5">
                <div className="determinate progress-mysql indigo"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <h5>Past Experiences</h5>
            <div className="divider indigo lighten-3"></div>
            <br />
            <div className="col 12 m4 brand-div">
              <div>
                <img src={BrandMicrosoft} className="responsive-img" />
              </div>
              <h5 className="center-align brand-div">Microsoft</h5>
            </div>
            <div className="col 12 m4 brand-div">
              <div>
                <img src={BrandCisco} className="responsive-img" />
              </div>
              <h5 className="center-align">Cisco</h5>
            </div>
            <div className="col 12 m4 brand-div">
              <div>
                <img src={BrandVmware} className="responsive-img" />
              </div>
              <h5 className="center-align">VMware</h5>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default About;
