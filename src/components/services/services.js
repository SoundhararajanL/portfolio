import { Component } from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
class Services extends Component {
    render() {
        return (
            <section id="services">
                <h5>What I Offer</h5>
                <h2>Services</h2>
                <div className="container services__container">
                    <article className="service">
                        <div className="service__head">
                            <h3>UI/UX Design</h3>
                        </div>
                        <ul className="service__list">
                            <li>
                                <BiCheck className="service__list-icon" />
                                <p>User Research:

                                    Conducting user interviews and surveys.</p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon" />
                                <p>Prototyping:

                                    Building interactive prototypes for user testing and feedback.</p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon" />
                                <p>Visual Design:

                                    Creating visually appealing and on-brand interfaces.</p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon" />
                                <p>Interaction Design:

                                    Designing engaging and intuitive user interactions.</p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon" />
                                <p>UI Style Guides:

                                    Creating comprehensive style guides for design consistency.</p>
                            </li>

                        </ul>
                    </article>
                    <article className="service">
                        <div className="service__head">
                            <h3>Web Development</h3>
                        </div>
                        <ul className="service__list">
                            <li>
                                <BiCheck className="service__list-icon" />
                                <p>Website Development:

                                    Custom website development tailored to your business needs.
                                </p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon" />
                                <p>Web Application Development:

                                    Creation of dynamic web applications to streamline business processes.
                                </p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon" />
                                <p>Front-End Development:

                                    HTML, CSS, and JavaScript development for interactive and visually appealing websites.
                                </p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon" />
                                <p>Back-End Development:

                                    Server-side scripting and programming (Node.js, Python, PHP).
                                </p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon" />
                                <p>API Development and Integration:

                                    Building custom APIs for seamless communication between different software components.
                                </p>
                            </li>

                        </ul>
                    </article>
                    <article className="service">
                        <div className="service__head">
                            <h3>Content Creation</h3>
                        </div>
                        <ul className="service__list">
                            <li>
                                <BiCheck className="service__list-icon" />
                                <p>Article Writing: Crafting engaging and informative articles on various topics.</p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon" />
                                <p>Copywriting: Developing persuasive and compelling copy for marketing materials, advertisements, and websites.</p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon" />
                                <p>Scriptwriting: Crafting scripts for videos, podcasts, or presentations.</p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon" />
                                <p>Editing and Proofreading: Ensuring your existing content is polished, error-free, and meets professional standards.</p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon" />
                                <p>Graphic Design Support: Collaborating on visual elements to complement written content.</p>
                            </li>

                        </ul>
                    </article>
                </div>
            </section>
        );
    }
}

export default Services;
