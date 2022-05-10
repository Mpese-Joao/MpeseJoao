import React from "react";

import pizza from "./assets/pizza.jpeg";

import finance from "./assets/finance.jpeg";
import view from "./assets/view.jpg";

import "./styles/Works.scss";

const Works = () => {
  return (
    <div className="works">
      <div className="project1">
        <img className="project__img" src={pizza} alt="" />
        <h2 className="featured__p">Project</h2>
        <p className="flex__p">
          Pizza menu for hungry clients, built with Reactjs and styled
          components.{" "}
        </p>
        <a href="https://fastpizza24.netlify.app" target="_blank">
          <button className="btn">See Work</button>
        </a>
      </div>

      <div className="project1">
        <img className="project__img" src={finance} alt="" />
        <h2 className="featured__p">Featured Project</h2>
        <p className="flex__p">
          Virtual Banking, to allow customer to make the right choice.Reactjs and
          styled components.{" "}
        </p>
        <a href="https://virtual24.netlify.app" target="_blank">
          <button className="btn">See Work</button>
        </a>
      </div>

      <div className="project1">
        <img className="project__img" src={view} alt="" />
        <h2 className="featured__p">Featured Project</h2>
        <p className="flex__p">
          Super clean Real Estate application built with Reactjs and styled
          components.
        </p>
        <a href="https://luxury24.netlify.app" target="_blank">
          <button className="btn">See Work</button>
        </a>
      </div>
    </div>
  );
};
export default Works;
