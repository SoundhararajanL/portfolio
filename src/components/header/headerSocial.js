import { Component } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

class HeaderSocials extends Component {
  render() {
    return (
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/soundhararajan-l-75786723b/" target="_blank" rel="noopener noreferrer" >
          <BsLinkedin />
        </a>
        <a href="https://github.com/SoundhararajanL" target="_blank" rel="noopener noreferrer" >
          <FaGithub />
        </a>
        
      </div> 
    );
  }
}
export default HeaderSocials;
