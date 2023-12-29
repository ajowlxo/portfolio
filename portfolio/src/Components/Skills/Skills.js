import React from "react";
import "./skills.css";
import Reactj from "../../Images/react.png";
import Python from "../../Images/python.png";
import Postgre from "../../Images/postgre.png";
import Node from "../../Images/node.png";
import Cloud from "../../Images/cloud.png";
import Javascript from "../../Images/jsx.png";
import { motion } from "framer-motion";
import { themeContext } from "../../context";
import { useContext } from "react";

function Skills() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Skills" id="skills">
      <div className="skillTitle">
        <span>SKILLS</span>
      </div>
      <div className="skillMain">
        <div className="skillsLeft">
          <div className="list">
            <ul>
              <li>
                <span style={{ color: darkMode ? "white" : "#212121" }}>
                  JavaScript
                </span>
              </li>
              <li>
                <span style={{ color: darkMode ? "white" : "#212121" }}>
                  Python
                </span>
              </li>
              <li>
                <span style={{ color: darkMode ? "white" : "#212121" }}>
                  React
                </span>
              </li>
              <li>
                <span style={{ color: darkMode ? "white" : "#212121" }}>
                  Node.js
                </span>
              </li>
              <li>
                <span style={{ color: darkMode ? "white" : "#212121" }}>
                  Next.js
                </span>
              </li>
              <li>
                <span style={{ color: darkMode ? "white" : "#212121" }}>
                  MongoDB
                </span>
              </li>
              <li>
                <span style={{ color: darkMode ? "white" : "#212121" }}>
                  Tailwind
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="skillsRight">
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="skillImage"
            style={{ background: darkMode ? "#212121" : "#f8f9fa" }}
          >
            <div className="logo">
              <img src={Python} alt="" />
            </div>
            <div className="logo">
              <img src={Reactj} alt="" />
            </div>
            <div className="logo">
              <img src={Node} alt="" />
            </div>

            <div className="logo" s>
              <img src={Postgre} alt="" />
            </div>
            <div className="logo">
              <img
                src={Javascript}
                alt=""
                style={{
                  height: "65px",
                  width: "80px",
                }}
              />
            </div>
            <div className="logo">
              <img src={Cloud} alt="" />
            </div>
            <div className="fullstack">Fullstack</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
