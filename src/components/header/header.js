import { Component } from "react";
import CTA from "./CTA";
import logo from "../images/logo.png";
import HeaderSocials from "./headerSocial";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Soundhararajan L</h1>
          <div className="text-light">Fullstack Developer</div>
          <CTA />
          <div className="me">
            <img src={logo} alt="ME" />
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down end 
          </a>
          <HeaderSocials />
        </div>
      </header>
    );
  }
}

export default Header;
