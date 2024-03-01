import React from "react";
import CV from "./Profile.pdf"; // Update the file name here
// import CV from "../../assets/cv.pdf";
// href={CV}
export default class CTA extends React.Component {
  render() {
    return (
      <div className="cta">
        <a className="btn"   href={CV} download>
          Download CV
        </a>
        <a className="btn btn-primary" href="#contact">
          Let's Talk
        </a>
      </div>
    );
  }
};
