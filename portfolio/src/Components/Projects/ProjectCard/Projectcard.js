import React from "react";
import "./projectcard.css";

import { themeContext } from "../../../context";
import { useContext } from "react";

function Projectcard({ link, projectImg, projectTitle, projectDesc }) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="projectCard"
      style={{
        background: darkMode ? "#212121" : "white",
        color: darkMode ? "white" : "#212121",
      }}
    >
      <img src={projectImg} alt="" />
      <div className="projectInfo">
        <h2>{projectTitle}</h2>
        <p>{projectDesc}</p>
        <a
          href={link}
          style={{
            color: "#4caf50",
            fontWeight: "500",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          GO TO WEBSITE (CLICK ME)!!
        </a>
      </div>
    </div>
  );
}

export default Projectcard;
