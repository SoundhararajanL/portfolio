import { Component } from "react";
import ME from "../images/profilephoto.JPG";
import { BsAwardFill } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
import { FaProjectDiagram } from "react-icons/fa";
import "./about.css";


class About extends Component {
  render() {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsAwardFill className="about__icon" />
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>
              <article className="about__card">
                <HiAcademicCap className="about__icon" />
                <h5>Education</h5>
                <small>BE-CSE</small><br></br>
                <small>(2018-22)</small>
              </article>
              <article className="about__card">
                <FaProjectDiagram className="about__icon" />
                <h5>Projects</h5>
                <small>10+ Completed Projects</small>
              </article>
            </div>
            <p>
            My current focus revolves around data science and JavaScript development, with a specialization in Google Apps Script. I bring a wealth of experience in both backend and frontend technologies to contribute effectively to software development projects.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
