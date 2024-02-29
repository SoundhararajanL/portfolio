import React from "react";
// import CV from "../../assets/cv.pdf";
// href={CV}
export default class CTA extends React.Component {
  render() {
    return (
      <div className="cta">
        <a className="btn"  download>
          Download CV
        </a>
        <a className="btn btn-primary" href="#contact">
          Let's Talk
        </a>
      </div>
    );
  }
};




