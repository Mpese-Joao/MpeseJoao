import React from "react";
import {
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
  MenuBook,
  SettingsPowerRounded,
} from "@material-ui/icons";
import "./styles/Profile.scss";
import man from "./assets/man.png";

const Profile = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>Hey There</p>
            <h1>I am Mpese Joao</h1>
            <p>Full-Stack Developer</p>

            <div className="icons">
              <a href="https://twitter.com/home">
                <Twitter className="icon" />
              </a>
              <a href="https://www.instagram.com/">
                <Instagram className="icon" />
              </a>

              <a href="https://github.com/R77R" target="_blank">
                <GitHub className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/mpese-joao-574519236/" target="_blank">
                <LinkedIn className="icon" />
              </a>
            </div>

            <div className="buttons">
              <a href="./assets/MpeseJoaoCvEng.pdf" download>
                <button>Get Resume</button>
              </a>

              <button>Hire Me</button>
            </div>
          </div>
        </div>

        <div className="main__img">
          <img src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
