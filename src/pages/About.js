import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import { BrowserRouter as Router } from "react-router-dom";

import profileImg from "../assets/images/profile-picture.jpg";

function About(props) {
  return (
    <div>
      <Router>
        <Hero
          className="/"
          title="Freelance translator, content writer, transcriber"
        />

        <Content className="/">
          <img src={profileImg} className="profileImg" alt="/" />
          <p>
            Multi-skilled and reliable translator and transcriber with almost 2
            years of professional experience. An enthusiastic learner who's able
            to absorb new ideas, communicate clearly and effectively with people
            from all social, cultural and prefessional backgrounds. A linguist
            with a vast set of skills and a keen eye for detail, who always goes
            the extra mile. Interested in graphic and web design, web
            development, e-commerce, nutrition, fitness, nature and travelling.
          </p>
          <p>
            <a href="/web/viewer.html?file=resume2020.pdf">
              Check out my resume (PDF)
            </a>
          </p>
        </Content>
      </Router>
    </div>
  );
}

export default About;
