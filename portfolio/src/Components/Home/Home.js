import React from "react";
import "./home.css";
import LinkedIn from "../../Images/linkedin.jpg";
import Gmail from "../../Images/gmail.jpg";
import Github from "../../Images/github.png";
import Navbar from "./Navbar/Navbar.js";
import Pyt from "../../Images/py.png";
import Js from "../../Images/js.png";
import Java from "../../Images/java.png";
import Php from "../../Images/php.png";
import Csharp from "../../Images/csharp.png";
import Cplus from "../../Images/cplus.png";

function Home() {
  return (
    <div className="home" id="home">
      <Navbar />
      <div className="homeLeft">
        <div className="greet"> NAMASTE!</div>

        <div className="intro">
          <span>I'm Arjun Hamal</span> <br />
          <span>Full Stack Developer</span>
        </div>
        <div className="contactIcons">
          <img src={LinkedIn} alt="" />

          <img src={Github} alt="" />

          <a href="mailto:hamalarjun057@gmail.com">
            <img src={Gmail} alt="" className="gmailIcon" />
          </a>
        </div>
      </div>
      <div className="homeRight">
        <div className="homeRightImages">
          <img src={Csharp} alt="" />
          <img src={Java} alt="" />
          <img src={Pyt} alt="" />
          <img src={Php} alt="" />
          <img src={Cplus} alt="" />
          <img src={Js} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
