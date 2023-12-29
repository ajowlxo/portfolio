import React from "react";

import "./navbar.css";
import Sun from "../../../Images/sun.png";
import Moon from "../../../Images/moon.png";
import { themeContext } from "../../../context";
import { useContext } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "click" });
  };

  return (
    <div className="navBar">
      <div className="n_left">
        HAMAL<span>.</span>
      </div>
      <div className="n_right">
        <Link to="skills" smooth={true}>
          <span>Skills</span>
        </Link>
        <Link to="projects" smooth={true}>
          <span>Projects</span>
        </Link>

        <div className="line"></div>
        <img
          onClick={handleClick}
          src={darkMode ? Sun : Moon}
          className="modeImg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
