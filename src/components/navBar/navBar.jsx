import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import M from "materialize-css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./navBar.styles.css";

const NavBar = () => {
  useEffect(() => {
    let elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  });

  return (
    <React.Fragment>
      <nav className="transparent">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              Home
            </Link>
            <a href="#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/portfolio">Porfolio</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul className="sidenav grey lighten-4" id="slide-out">
        <li>
          <Link to="/" className="sidenav-close">
            <FontAwesomeIcon icon="home" />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="sidenav-close">
            <FontAwesomeIcon icon="user-check" />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="sidenav-close">
            <FontAwesomeIcon icon="laptop-code" />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            Portfolio
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavBar;
