import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";

import "./navbar.css";


class Nav extends React.Component {
  constructor() { 
    super();
    this.state = { active: "#" };
  }

  render() {
    return (
      <nav>
        <a
          onClick={() => this.setState({ active: "#" })}
          className={this.state.active === "#" ? "active" : ""}
          href="#"
        >
          <AiOutlineHome />
        </a>
        <a
          onClick={() => this.setState({ active: "#about" })}
          className={this.state.active === "#about" ? "active" : ""}
          href="#about"
        >
          <AiOutlineUser />
        </a>
        <a
          onClick={() => this.setState({ active: "#experience" })}
          className={this.state.active === "#experience" ? "active" : ""}
          href="#experience"
        >
          <BiBook />
        </a>
        <a
          onClick={() => this.setState({ active: "#services" })}
          className={this.state.active === "#services" ? "active" : ""}
          href="#services"
        >
          <RiServiceLine />
        </a>
        <a
          onClick={() => this.setState({ active: "#portfolio" })}
          className={this.state.active === "#portfolio" ? "active" : ""}
          href="#portfolio"
        >
          <FaProjectDiagram />
        </a>
        <a
          onClick={() => this.setState({ active: "#contact" })}
          className={this.state.active === "#contact" ? "active" : ""}
          href="#contact"
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    );
  }
}

export default Nav;
