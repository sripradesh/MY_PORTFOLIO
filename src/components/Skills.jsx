import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <h3>My Skills</h3>
      <div className="skill">
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
