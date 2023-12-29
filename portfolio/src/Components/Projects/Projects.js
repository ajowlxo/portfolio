import React from "react";
import Projectcard from "./ProjectCard/Projectcard.js";
import redux from "../../Images/redux.png";
import tailwind from "../../Images/tailwind.png";
import gym from "../../Images/gym.png";
import book from "../../Images/book.png";
import ecom from "../../Images/ecom.png";
import contact from "../../Images/contact.PNG";
import blog from "../../Images/blog.png";

import "./project.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projectTitle">PROJECTS</div>
      <div className="cards">
        <Projectcard
          link="https://ecom-mern-nine.vercel.app/"
          projectTitle="Ecommerce"
          projectDesc="Ecommerce mern stack app responsive UI."
          projectImg={ecom}
        />
        <Projectcard
          link="https://blog-next-drab-one.vercel.app/"
          projectTitle="BlogSite"
          projectDesc="Appealing Next js responsive UI "
          projectImg={blog}
        />

        <Projectcard
          link="https://mern-book-client.vercel.app/"
          projectTitle="Bookstore Mern"
          projectDesc="MERN app with create, read, delete, and update functionalities"
          projectImg={book}
        />

        <Projectcard
          link="https://120304e7.redux-6xx.pages.dev"
          projectTitle="Redux Toolkit"
          projectDesc="Redux toolkit is used for state management in a react app."
          projectImg={redux}
        />
        <Projectcard
          link="https://f731891a.tailwind-landing.pages.dev "
          projectImg={tailwind}
          projectTitle="Tailwind CSS"
          projectDesc="A fully responsive landing page for a data agency made using tailwind in react."
        />
        <Projectcard
          link="https://mern-crud-tau.vercel.app/"
          projectImg={contact}
          projectTitle="MERN CRUD APP"
          projectDesc="Basic mern app with CRUD to save conatcts"
        />
        <Projectcard
          link="https://aeb040e3.gymreactjs-20v.pages.dev"
          projectImg={gym}
          projectTitle="Gym landing page"
          projectDesc="A fully responsive landing page made using react and media queries."
        />
      </div>
    </div>
  );
}

export default Projects;
