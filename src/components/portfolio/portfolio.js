import { Component } from "react";
import "./portfolio.css";
import IMG1 from "../images/perfect app home.png";
import IMG2 from "../images/portfolio.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Perfect Application ",
    github: "https://github.com/SoundhararajanL/Perfect-Application",
    demo: "https://65fbdabc84c183856aca17dc--soundharportfolio.netlify.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Portfolio",
    github: "https://github.com/SoundhararajanL/portfolioProject1",
    demo: "https://65fbd7fb4953698a21049888--be-perfect.netlify.app/"
  }
];

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
