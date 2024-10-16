import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="html">
        <p>HTML</p>
        <div className="progress-bar" style={{ width: '90%' }}></div>
      </div>
      <div className="skill">
        <p>CSS</p>
        <div className="progress-bar" style={{ width: '85%' }}></div>
      </div>
      <div className="skill">
        <p>JavaScript</p>
        <div className="progress-bar" style={{ width: '40%' }}></div>
        <br></br>
      </div>
    </div>
  );
};

export default Skills;
