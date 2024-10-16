import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';
// import bgImage from '../assets/backround.jpg';

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* <div
        className="background-layer"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div> */}
      <div className="hero-content">
        <h1>Hi, I'm Sripradesh</h1>
        <h2>
          <Typewriter
            words={["A Web Developer", "A Full Stack Engineer", "A Lifelong Learner"]}
            loop={true}
            cursor
          />
        </h2>
        <button className="neon-button">View My Work</button>
      </div>
    </div>
  );
};

export default HeroSection;
