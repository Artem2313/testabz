import React from 'react';
import { Link } from 'react-scroll';
import { title, textDesktop, textMobile } from './AboutMeText.json';
import './AboutMe.scss';

const AboutMe = () => (
  <section className="aboutme">
    <div className="aboutme__container">
      <h1>{title}</h1>
      <p className="desktop">{textDesktop}</p>
      <p className="mobile">{textMobile}</p>
      <Link to="Sign up" spy smooth className="aboutme__button">
        <button type="button" className="button">
          Sign up now
        </button>
      </Link>
    </div>
  </section>
);

export default AboutMe;
