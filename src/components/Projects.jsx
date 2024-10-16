import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'Description of Project One. A brief overview of what this project is about.',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'Description of Project Two. Highlight the technologies used and the impact of the project.',
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'Description of Project Three. A summary of the goals and results achieved.',
      link: '#',
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
