import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                I have a wide range of experience in the field of web
                development.
              </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Continuous Improvement</h5>
              <small>
                I try to learn a new skill everyday or improve an existent one.
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>A wide variety of projects. Check out my Github!</small>
            </article>
          </div>

          <p>
            I'm the kind of guy who learns everything I like incredibly fast and
            self-taught. and if I really like it, I will learn.
            <br />
            <q>
              Patience, persistence and perspiration make an unbeatable
              combination for success.
            </q>
            <br />
            <cite>- Napoleon Hill</cite>
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
